'use client';

import { useState } from 'react';
import Chat from '@/components/Chat';

export default function ChatPage() {
    // In a real app, these would come from authentication
    const [userId] = useState(1);
    const [roomId] = useState(1);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Chat Room</h1>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Chat roomId={roomId} userId={userId} />
                </div>
            </div>
        </div>
    );
} 