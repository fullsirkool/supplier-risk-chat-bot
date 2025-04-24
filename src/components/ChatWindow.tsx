'use client'

import {useChat} from '@ai-sdk/react'

export default function ChatPage() {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        status,
        error
    } = useChat({
        api: '/api/chat',
    })

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            <h1 className="text-2xl font-bold">Compliance Assistant</h1>

            <div className="space-y-2">
                {messages.map(m => (
                    <div key={m.id} className="border p-2 rounded bg-gray-100">
                        <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> {m.content}
                    </div>
                ))}
            </div>

            {status === "streaming" && (
                <div className="text-sm text-gray-500">AI is thinking...</div>
            )}

            {error && (
                <div className="text-sm text-red-500">Error: {error.message}</div>
            )}

            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Input value:", input); // Debugging line
                handleSubmit(e);
            }} className="flex gap-2">
                <input
                    className="flex-1 p-2 border rounded"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask something about suppliers..."
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Send
                </button>
            </form>
        </div>
    )
}
