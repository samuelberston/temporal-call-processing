// Import OpenAI, Supabase, New Relic
import { callClassificationAssistant } from "../openai/assistants.openai";


// classify call activity
export async function classifyCall(transcript: string) {
    const categories = ["booked", "cancelled", "emergency", "incomplete", "inquiry", "other"];
    const classification = await callClassificationAssistant(transcript, categories);
    return classification;
}

// flag call

// tag call

// new relic alert
