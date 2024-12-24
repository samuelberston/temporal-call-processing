// Types

// Workflow state
export enum WorkflowState {
    WORKFLOW_STARTED = 'WORKFLOW_STARTED',
    CALL_CLASSIFICATION_COMPLETED = 'CALL_CLASSIFICATION_COMPLETED',
    CALL_FLAGGING_COMPLETED = 'CALL_FLAGGING_COMPLETED',
    CALL_TAGGING_COMPLETED = 'CALL_TAGGING_COMPLETED',
    WORKFLOW_COMPLETED = 'WORKFLOW_COMPLETED',
    WORKFLOW_FAILED = 'WORKFLOW_FAILED'
}

// Workflow result
export type WorkflowResult = {
    classification: string;
    flagged: boolean;
    tagged: string[];
}
