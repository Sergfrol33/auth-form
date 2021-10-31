import {useState, useCallback} from "react";
import {IUseHttp} from "./types";


export const useHttp = (): IUseHttp => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const request = useCallback(async (url: string, method: string, body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {
                method,
                body,
                headers
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message || 'Что-то пошло не так')
            setLoading(false)
            return data
        } catch (e: any) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])
   //const clearError = () => setError(null)
    return {request, loading, error}
}