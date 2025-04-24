import {useState, FormEvent} from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

export default function ChatInput({onSendMessage, isLoading}: ChatInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && !isLoading) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about supplier risks..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                disabled={isLoading}
            />
            <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Send
            </button>
        </form>
    );
}