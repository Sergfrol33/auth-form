import React from 'react';
import useAuth from "./hooks/useAuth";
import AuthProvider from "./context/AuthProvider";
import Routes from "./components/Routes/Routes";


export interface ILists {
    id:number
    name:string
    text:string
}



function App() {
    const {token,login,logout,userId} = useAuth()
    const lists: ILists[] = [
        {id: 1, name: 'Первый заголовок', text: 'Круто'},
        {id: 2, name: 'Второй', text: 'Не круто'},
    ]
    return (
            <AuthProvider value={{token,login,logout,userId,lists}}>
                <Routes isAuth={!!token}/>
            </AuthProvider>
    );
}

export default App;
