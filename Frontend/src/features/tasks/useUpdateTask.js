import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTask as updateTaskAPI } from "../../services/tasksAPI";

export function useUpdateTask() {
    const queryClient = useQueryClient();
    const {isLoading:isUpdating, mutate:updateTask} = useMutation({
        mutationFn: updateTaskAPI,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['tasks']
            })
        }
    })
    return {isUpdating, updateTask}
}
