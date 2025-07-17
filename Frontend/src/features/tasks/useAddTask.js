import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTask } from "../../services/tasksAPI"

export function useAddTask() {
    const queryClient = useQueryClient();
    const {isLoading:isCreating, mutate:createTask} = useMutation({
        mutationFn: addTask,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['tasks']
            })
        }
    })
    return {isCreating, createTask}
}
