import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Supplier Compliance Assistant',
    description: 'A compliance assistant that helps users search for supplier risk information',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-4xl">
            {children}
        </div>
        </body>
        </html>
    );
}