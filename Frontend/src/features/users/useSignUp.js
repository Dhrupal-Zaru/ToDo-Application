import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/useAuthAPI";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
    const navigate = useNavigate();
    const { mutate: signUp, isCreating } = useMutation({
        mutationFn: signUpAPI,
        onSuccess: () => {
            navigate('/login');
            alert('Registed Successfully');
        }
    })

    return {signUp, isCreating};
}
