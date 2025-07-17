import { useMutation } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/useAuthAPI";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: loginAPI,
        onSuccess: () => {
            alert('Login Successfully');
            navigate('/');
        },
        onError:(err)=>{
            alert(err?.response?.data?.message)
            console.log(err?.response?.data?.message)
        }
    });
    

    return {login, isLoading};
}
