import {cn} from '@/lib/utils';
import type {ChatMessage as ChatMessageType} from '@/lib/utils';

interface ChatMessageProps {
    message: ChatMessageType;
}

export default function ChatMessage({message}: ChatMessageProps) {
    // Determine message class based on role
    const messageClasses = {
        user: 'user-message',
        assistant: 'assistant-message',
        tool: 'tool-message',
    };

    return (
        <div className={cn(messageClasses[message.role])}>
            <div className="font-semibold mb-1">
                {message.role === 'user' ? 'You' : message.role === 'assistant' ? 'Assistant' : 'Tool: ' + message.name}
            </div>
            <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
    );
}