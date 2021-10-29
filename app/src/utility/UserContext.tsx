import {createContext, FC, useContext} from "react";
import React from 'react';
interface IUserContext {
    auth?: boolean
    submitAuth?: () => void
}
interface Props {
    value: IUserContext
}
const UserContext = createContext<IUserContext>({})
export const useUserContext = () => useContext(UserContext)

export const UserProvider:FC<Props> = (props) => {
    return (
        <UserContext.Provider value={props.value}>
            {props.children}
        </UserContext.Provider>
    );
};

