// Config
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    openai: {
        key: process.env.OPENAI_API_KEY,
        model: "gpt-4o-mini"
    },
    supabase: {
        key: process.env.SUPABASE_KEY,
        url: process.env.SUPABASE_URL
    },
    newRelic: {
        key: process.env.NEW_RELIC_API_KEY,
        account: process.env.NEW_RELIC_ACCOUNT
    },
    temporal: {
        namespace: 'call-processing',
        taskQueue: 'call-processing-queue'
    }
}
