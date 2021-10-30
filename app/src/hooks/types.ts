export interface IUseHttp {
    request: (url: string, method: string, body?: any, headers?: any) => Promise<any>
    loading: boolean
    error: string | null
}

export interface IAuth {
    login?: (jwtToken:string,id:string) => void
    logout?: () => void
    token?: string | null
    userId?: string | null
}
