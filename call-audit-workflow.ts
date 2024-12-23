/**
 *      Call Audit Workflow Service
 *      workflow runs in Temporal
 */

// Workflow trigger by call ending event

// Get a CallID as well as the customerId

// Retrieve the call log from the Voice AI platform

/*
[
  {
    id: 'de28acb8-b62b-4e25-a64c-ced9dd181990',
    assistantId: 'efa66da3-bbc2-4afd-b4c4-4f43583bae69',
    type: 'webCall',
    startedAt: '2024-12-22T18:43:42.914Z',
    endedAt: '2024-12-22T18:44:38.360Z',
    transcript: "AI: Hello. This is Mary from Mary's Dental. How can I assist you today?\n" +
      "User: I'm trying to remember if I have an appointment scheduled today.\n" +
      'AI: Well, can definitely help you with that. Can I have your full name so I can look up your appointment?\n' +
      "User: It's Samuel Burston, b e r s t o n.\n" +
      "AI: Let me check that for you, Samuel Burstyn. Looks like I don't have an appointment under that name today. Did you want to schedule 1?\n" +
      'User: Yeah. What do you have available?\n' +
      'AI: Alrighty, Samuel. What brings you in today?\n' +
      'User: I need to have my teeth cleaned.\n' +
      'AI: Got it. A cleaning it is? When were you thinking of coming in?\n' +
      'User: Within the next 2 weeks, ideally,\n' +
      'AI: Cool. How about we aim for the week after next? Any particular day or time that works best for you.\n',
    recordingUrl: 'https://storage.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990-1734893080871-83a858ed-749f-4c78-beb1-7889b25743c4-mono.wav',
    summary: "Samuel Burston called Mary's Dental to check if he had an appointment scheduled for today. Upon learning he didn't have one, he requested to schedule a teeth cleaning appointment within the next two weeks. The receptionist, Mary, suggested scheduling for the week after next and asked about his preferred day and time.",
    createdAt: '2024-12-22T18:43:38.651Z',
    updatedAt: '2024-12-22T18:44:44.198Z',
    orgId: '9b974922-76e2-4f22-9a14-4cb55d262291',
    cost: 0.0797,
    webCallUrl: 'https://vapi.daily.co/zT5jgonTeH14N5c1LWrg',
    status: 'ended',
    endedReason: 'customer-ended-call',
    messages: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    stereoRecordingUrl: 'https://storage.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990-1734893080878-24ce0734-7d4f-4f84-9f3c-5565a380825c-stereo.wav',
    costBreakdown: {
      stt: 0.0104,
      llm: 0.0017,
      tts: 0.0178,
      vapi: 0.0462,
      total: 0.0797,
      llmPromptTokens: 3042,
      llmCompletionTokens: 144,
      ttsCharacters: 593,
      analysisCostBreakdown: [Object]
    },
    assistantOverrides: { clientMessages: [Array] },
    analysis: {
      summary: "Samuel Burston called Mary's Dental to check if he had an appointment scheduled for today. Upon learning he didn't have one, he requested to schedule a teeth cleaning appointment within the next two weeks. The receptionist, Mary, suggested scheduling for the week after next and asked about his preferred day and time.",
      successEvaluation: 'false'
    },
    artifact: {
      recordingUrl: 'https://storage.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990-1734893080871-83a858ed-749f-4c78-beb1-7889b25743c4-mono.wav',
      stereoRecordingUrl: 'https://storage.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990-1734893080878-24ce0734-7d4f-4f84-9f3c-5565a380825c-stereo.wav',
      messages: [Array],
      messagesOpenAIFormatted: [Array],
      transcript: "AI: Hello. This is Mary from Mary's Dental. How can I assist you today?\n" +
        "User: I'm trying to remember if I have an appointment scheduled today.\n" +
        'AI: Well, can definitely help you with that. Can I have your full name so I can look up your appointment?\n' +
        "User: It's Samuel Burston, b e r s t o n.\n" +
        "AI: Let me check that for you, Samuel Burstyn. Looks like I don't have an appointment under that name today. Did you want to schedule 1?\n" +
        'User: Yeah. What do you have available?\n' +
        'AI: Alrighty, Samuel. What brings you in today?\n' +
        'User: I need to have my teeth cleaned.\n' +
        'AI: Got it. A cleaning it is? When were you thinking of coming in?\n' +
        'User: Within the next 2 weeks, ideally,\n' +
        'AI: Cool. How about we aim for the week after next? Any particular day or time that works best for you.\n'
    },
    costs: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    monitor: {
      listenUrl: 'wss://phone-call-websocket.aws-us-west-2-backend-production1.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990/listen',
      controlUrl: 'https://phone-call-websocket.aws-us-west-2-backend-production1.vapi.ai/de28acb8-b62b-4e25-a64c-ced9dd181990/control'
    },
    transport: { assistantVideoEnabled: false }
  }
]
*/

// LLM Client set up

// Prompt: You are a customer service QA agent for {Company} responsible for auditing a call
// Read through the transcropt and actions performed by the Voice agent and identify potential misalignment or actions that were not completed

/**
 * 
 * JSON Schema for call audit
 * 
 * {
 *      "uncompletedActions": [],
 *      "violatedPolicies": [],
 *      "unintendedActions": [],
 *      "classification": 'booked' | 'unbooked' | 'excused'
 *      "emergency": boolean
 *      "flagging": 
 * }
 * 
 * 
 */

// LLM responds with the JSON audit object

// Trigger retroactive actions step
// - 

// Think about how we can use something like Langraph to make the decisions easier, zero-shot decisions are not the best
// Most frequently raised ticket is that the agent misclassified the call as 'worked' or 'emergency'
// Sometimes the agent will classify " i have a flood in my basement " as an emergency
// How would we solve this 



// Explore LangGraph memory to prevent recurring failures