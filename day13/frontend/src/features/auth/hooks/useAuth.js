import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register, getMe } from "../services/auth.api.js"

export function useAuth() {
    const context = useContext(AuthContext)
    return context
    // const { user, setuser, setloading } = context
    
    // const handleLogin = async (username, password) => {
    //     setloading(true)
    //     const response = await login(username, password)
        
    // }
}