from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from typing import List
import uvicorn
from pydantic import BaseModel
from datetime import datetime

app = FastAPI(
    title="CollabSphere API",
    description="Backend API for CollabSphere - AI-Powered Community Chat Platform",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Message(BaseModel):
    id: int
    content: str
    sender_id: int
    room_id: int
    created_at: datetime
    type: str = "text"  # text, voice, system

class Room(BaseModel):
    id: int
    name: str
    description: str
    created_at: datetime
    is_private: bool = False

# Routes
@app.get("/")
async def root():
    return {"message": "Welcome to CollabSphere API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# WebSocket endpoint will be added here
# @app.websocket("/ws")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 