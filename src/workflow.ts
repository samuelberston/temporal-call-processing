import { proxyActivities } from "@temporalio/workflow";
import { WorkflowState, WorkflowResult } from "../types";
import type * as callProcessingActivities from "../activities/callProcessing.activities";
import type * as workflowStateActivities from "../activities/workflowState.activities";

const { classifyCall } = proxyActivities<typeof callProcessingActivities>({
    startToCloseTimeout: '1 minute',
});

const { updateWorkflowState } = proxyActivities<typeof workflowStateActivities>({
    startToCloseTimeout: '10 seconds',
});

export async function callProcessingWorkflow(callTranscript: string, workflowId: string): Promise<WorkflowResult> {
    try {
        // Update initial workflow state
        await updateWorkflowState(WorkflowState.WORKFLOW_STARTED, workflowId);

        // Classify call
        const classification = await classifyCall(callTranscript);

        // Update workflow state
        await updateWorkflowState(WorkflowState.CALL_CLASSIFICATION_COMPLETED, workflowId);

        // Flag call

        // Update workflow state
        await updateWorkflowState(WorkflowState.CALL_FLAGGING_COMPLETED, workflowId);

        // Tag call

        // Update workflow state
        await updateWorkflowState(WorkflowState.CALL_TAGGING_COMPLETED, workflowId);

        // Send alerts if necessary

        // Update final workflow state
        await updateWorkflowState(WorkflowState.WORKFLOW_COMPLETED, workflowId);

        // Return workflow result
        return {
            classification,
        };
    } catch (error) {
        // Handle error state
        await updateWorkflowState(WorkflowState.WORKFLOW_FAILED, workflowId);
        
        throw error;
    }
}
