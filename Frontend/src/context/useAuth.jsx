import { createContext, useContext, useEffect, useState } from 'react'

const authContext = createContext();

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token && token !== 'undefined' && token !== 'null') setIsAuthenticated(true);
        else setIsAuthenticated(false);
        setIsLoading(false)
    }, []);

    return (
        <authContext.Provider value={{ isAuthenticated, isLoading }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(authContext);
    return context; 
}
