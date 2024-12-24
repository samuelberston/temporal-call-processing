import { createClient } from "@supabase/supabase-js";
import { config } from "../config";
import { WorkflowState } from "../types";

const supabase = createClient(config.supabase.url as string, config.supabase.key as string);

export const updateWorkflowState = async (workflowState: WorkflowState, workflowId: string) => {
    const { error } = await supabase
        .from('workflow_state')
        .insert({ state: workflowState, workflow_id: workflowId })
    if (error) {
        throw error;
    }
}
