# Temporal Call Processing

This Temporal workflow processes calls from an AI Voice assistant and performs the following tasks:

- classification of the call as: booked, unbooked, excused, emergency
- audit of the call to identify potential misalignments or actions that were not completed
- trigger retroactive actions based on the audit

The workflow is triggered by a call ending event from the Voice AI platform.

Components:
- Input: AI voice call object i.e. Vapi
- Schema: Zod Typescript schema to define LLM classification response
- Agents: classification, action QA
- Data: action logs database
