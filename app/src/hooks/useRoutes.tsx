import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "../pages/Home/Home";
import UserForm from "../pages/UserForm";
const useRoutes = (isAuth: boolean): JSX.Element => {
    if (isAuth){
        return (
            <Switch>
                    <Route path={'/'} exact>
                         <Home/>
                    </Route>
                <Redirect to={'/'}/>
            </Switch>
        )
    } return (
            <Switch>
                <Route path={'/form'} exact>
                    <UserForm/>
                </Route>
                <Redirect to={'/form'}/>
            </Switch>
        )
}
export default useRoutes