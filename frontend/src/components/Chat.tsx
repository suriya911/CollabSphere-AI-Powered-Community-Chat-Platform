import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
    id: number;
    content: string;
    sender_id: number;
    room_id: number;
    created_at: string;
    type: string;
}

interface ChatProps {
    roomId: number;
    userId: number;
}

export default function Chat({ roomId, userId }: ChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState<Socket | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000');
        setSocket(newSocket);

        newSocket.emit('join_room', { room_id: roomId });

        newSocket.on('message', (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            newSocket.close();
        };
    }, [roomId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !socket) return;

        const message = {
            content: newMessage,
            sender_id: userId,
            room_id: roomId,
            type: 'text',
        };

        socket.emit('message', message);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender_id === userId ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender_id === userId
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-800'
                                }`}
                        >
                            <p>{message.content}</p>
                            <p className="text-xs mt-1 opacity-75">
                                {new Date(message.created_at).toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="p-4 bg-white border-t">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 input-field"
                    />
                    <button type="submit" className="btn-primary">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
} 