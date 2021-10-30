import {useState,useCallback} from "react";

const storageToken = 'token'
const storageUserId = 'userId'
const useAuth = () => {
    const [token,setToken] = useState<string>('')
    const [userId,setUserId] = useState<string>('')
    const login = useCallback((jwtToken:string,id:string) => {
        setToken(token)
        setUserId(id)
        localStorage.setItem(storageToken,token)
        localStorage.setItem(storageUserId,userId)
    },[])
    const logout = useCallback(() => {

    },[])
    return {login,logout}
}

export default useAuth