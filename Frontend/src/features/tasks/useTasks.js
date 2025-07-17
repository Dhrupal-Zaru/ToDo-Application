import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/tasksAPI";

export function useTasks() {

    const { isLoading, data: tasks } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks
    })

    return { tasks, isLoading };
}