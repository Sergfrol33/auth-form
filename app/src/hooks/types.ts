export interface IUseHttp {
    request: (url: string, method: string, body?: any, headers?: any) => Promise<any>
    loading: boolean
    error: string | null
}

export interface IRequest{

}