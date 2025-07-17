import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/useAuthAPI";

export function useUser() {

    const {isLoading, data: currentUser} = useQuery({
        queryKey:['user'],
        queryFn:getUser,
    })
    return {currentUser, isLoading};
}


