import { OpenAI } from "openai";
import { config } from "./config";
const openai = new OpenAI();

/**
 *          OpenAI assistants:
 *          - Classification assistant
 *          - Flag assistant
 *          - Tag assistant
 * 
 *          OpenAI Assistants API: https://platform.openai.com/docs/assistants/
 */

// Classification assistant
export const callClassificationAssistant = async (transcript: string, categories: string[]) => {
    // Create classification assistant
    const classificationAssistant = await openai.beta.assistants.create({
        name: "Classification Assistant",
        instructions: "Classify a transcript into one of the predefined categories. Return the category in the response as a string i.e. 'booked'.",
        model: config.openai.model,
    });

    // Create classification thread
    const classificationThread = await openai.beta.threads.create();

    // Create classification thread message
    await openai.beta.threads.messages.create(
        classificationThread.id, 
    {  
        role: "user",
        content: 
        `
        Transcript: ${transcript}
        Categories: ${categories}
        `
    });

    // Create classification thread run
    const classificationThreadRun = await openai.beta.threads.runs.createAndPoll(
        classificationThread.id,
        {
            assistant_id: classificationAssistant.id,
            instructions: "Classify a transcript into one of the predefined categories. Return the category in the response as a string ie 'booked'.",
        }
    );

    // Get classification thread run messages
    if (classificationThreadRun.status === "completed") {
        const messages = await openai.beta.threads.messages.list(
            classificationThreadRun.thread_id
        );
        for (const message of messages.data.reverse()) {
            console.log(`${message.role} > ${message.content[0].text.value}`);
        }    
    } else {
        console.log(`Classification thread run failed with status: ${classificationThreadRun.status}`);
    }
}


// Flag assistant
export const flagAssistant = openai.beta.assistants.create({
    name: "Flag Assistant",
    instructions: "Flag a transcript if it contains any of the predefined flags. Return the flags in the response ie ['flag1', 'flag2'].",
    model: config.openai.model,
});

// Tag assistant
export const tagAssistant = openai.beta.assistants.create({
    name: "Tag Assistant",
    instructions: "Tag a transcript if it contains any of the predefined tags. Return the tags in the response ie ['tag1', 'tag2'].",
    model: config.openai.model,
});