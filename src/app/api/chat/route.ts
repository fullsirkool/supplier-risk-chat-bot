import {streamText, tool} from 'ai';
import {openai} from '@ai-sdk/openai';
import {z} from 'zod';
import {searchSuppliers} from '@/lib/suppliers';

export const runtime = 'edge';

const searchSuppliersTool = tool({
    parameters: z.object({
        top: z.number().optional(),
        industry: z.string().optional(),
        category: z.string().optional(),
    }),
    execute: async ({top, industry, category}: { top?: number; industry?: string; category?: string }) => {
        return searchSuppliers({top, industry, category});
    },
});

export async function POST(req: Request) {
    const {messages} = await req.json();
    console.log("messages", messages);
    const result = streamText({
        model: openai('gpt-4.1'),
        tools: {searchSuppliersTool},
        messages
    });
    const dataStreamResponse = result.toDataStreamResponse();
    console.log("dataStreamResponse", dataStreamResponse.body);
    return new Response(dataStreamResponse.body, dataStreamResponse);
}
