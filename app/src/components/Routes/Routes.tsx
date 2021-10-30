import React, {FC, useEffect} from "react";
import {Switch, Route, useHistory, Redirect} from "react-router-dom";
import Home from "../../pages/Home/Home";
import UserForm from "../../pages/UserForm";
import News from "../../pages/News/News";
import CheckAuth from "../CheckAuth/CheckAuth";
import DetailNews from "../../pages/DetailNews/DetailNews";

interface Props {
    isAuth: boolean
}

const Routes: FC<Props> = (props): JSX.Element => {
    return (
        <Switch>
            <CheckAuth isAuth={props.isAuth} path={'/'} exact>
                    <Home/>
            </CheckAuth>
            <CheckAuth isAuth={props.isAuth} path={'/news'} exact>
                <News/>
            </CheckAuth>
            <CheckAuth isAuth={props.isAuth} path={'/news/:id'} exact>
                <DetailNews/>
            </CheckAuth>
            <Route path={'/form'} exact>
                <UserForm/>
            </Route>
        </Switch>
    )

}
export default Routes