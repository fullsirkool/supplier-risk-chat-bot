import ChatWindow from '@/components/ChatWindow';
import {useChat} from "@ai-sdk/react";

export default function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
            <div className="w-full max-w-4xl">
                <header className="py-6">
                    <h1 className="text-3xl font-bold text-center text-primary-700">
                        Supplier Compliance Assistant
                    </h1>
                    <p className="text-center text-gray-600 mt-2">
                        Ask questions about supplier risks, search for high-risk suppliers, or get information about
                        specific industries.
                    </p>
                </header>

                <ChatWindow/>
            </div>
        </main>
    );
}