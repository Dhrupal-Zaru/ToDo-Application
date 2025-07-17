import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTask as deleteTaskAPI } from "../../services/tasksAPI"

export function useDeleteTask() {
    const queryClient = useQueryClient();
    const {isLoading:isDeleting, mutate:deleteTask} = useMutation({
        mutationFn: deleteTaskAPI,
        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:['tasks']
            })
        }
    })
    return {isDeleting, deleteTask}
}
