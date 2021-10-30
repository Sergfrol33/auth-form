import {createContext, FC, ReactNode, useContext} from "react";
import {IAuth} from "../hooks/types";
import {ILists} from "../App";

const AuthContext = createContext({})
interface IContext {
    isAuth?: boolean
    lists?: ILists[]
}
interface Props{
    children: ReactNode,
    value?: IAuth & IContext
}
export const useAuthContext = () => useContext(AuthContext)
const AuthProvider:FC<Props> = (props) => {
    const {children,value} = props
    return (
        <AuthContext.Provider value={{...value}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider