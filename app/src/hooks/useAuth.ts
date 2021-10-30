import {useState, useCallback, useEffect} from "react";
import {IAuth} from "./types";
import {useHistory} from "react-router-dom";

const storageToken = 'token'

const useAuth = ():IAuth => {
    const [token,setToken] = useState<string | null>(null)
    const [userId,setUserId] = useState<string | null>(null)
    const history = useHistory()
    const login = useCallback((jwtToken:string,id:string) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem(storageToken,JSON.stringify({token: jwtToken,userId: id}))
        history.push('/')
    },[history])
    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageToken)
    },[])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageToken) as string)
        if (data && data.token){
            login(data.token, data.userId)
        }
    },[login])
    return {login,logout,token,userId}
}

export default useAuth