interface QaPromptArgs {
    summary: string;
    transcript: string;
    endedReason: string;
}

export const interpolateQaPrompt = ({ summary, transcript, endedReason }: QaPromptArgs) => `
    You are a QA agent tasked with retroactively analyzing calls made by a voice AI agent provided by Vapi.

    Assess the data from the call to generate your response:

    AI generated summary: 
    ${summary}

    Call transcript:
    ${transcript}

    Reason call ended:
    ${endedReason}

    Refer to the following schema to formulate your response. The pipe | means pick from one. An array ["",""] means pick 0 or more. 

    {
        "classification": "booked" | "excused" | "unbooked" | "emergency",

        "flags": ["hallucinated", "incomplete", "quality_issue"],

        "tags": ["callback_required", "is_spam", "estimate_required"]
    }

    Return your response in JSON format, without any additional markdown. 
`;

export const interpolateActionsPrompt = ({ args }) => {

};
