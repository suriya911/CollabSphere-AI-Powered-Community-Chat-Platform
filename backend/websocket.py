from fastapi import WebSocket, WebSocketDisconnect
from typing import Dict, List
import json
from datetime import datetime

class ConnectionManager:
    def __init__(self):
        # room_id -> List[WebSocket]
        self.active_connections: Dict[int, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, room_id: int):
        await websocket.accept()
        if room_id not in self.active_connections:
            self.active_connections[room_id] = []
        self.active_connections[room_id].append(websocket)

    def disconnect(self, websocket: WebSocket, room_id: int):
        if room_id in self.active_connections:
            self.active_connections[room_id].remove(websocket)
            if not self.active_connections[room_id]:
                del self.active_connections[room_id]

    async def broadcast(self, message: dict, room_id: int):
        if room_id in self.active_connections:
            for connection in self.active_connections[room_id]:
                try:
                    await connection.send_json(message)
                except WebSocketDisconnect:
                    self.disconnect(connection, room_id)

manager = ConnectionManager()

async def handle_websocket(websocket: WebSocket, room_id: int):
    await manager.connect(websocket, room_id)
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            message["timestamp"] = datetime.utcnow().isoformat()
            await manager.broadcast(message, room_id)
    except WebSocketDisconnect:
        manager.disconnect(websocket, room_id)
    except Exception as e:
        print(f"Error in websocket handler: {e}")
        manager.disconnect(websocket, room_id) 