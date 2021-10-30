import React, {FC, useEffect} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import Home from "../../pages/Home/Home";
import UserForm from "../../pages/UserForm";
import News from "../../pages/News/News";
import CheckAuth from "../CheckAuth/CheckAuth";
import DetailNews from "../../pages/DetailNews/DetailNews";

interface Props {
    isAuth: boolean
}

const Routes: FC<Props> = (props): JSX.Element => {
    const history = useHistory()
    useEffect(() => {
        if (props.isAuth) history.push('/')
    }, [props.isAuth,history])
    return (
        <Switch>
            <Route path={'/'} exact>
                <CheckAuth isAuth={props.isAuth}>
                    <Home/>
                </CheckAuth>
            </Route>
            <Route path={'/news'} exact>
                <CheckAuth isAuth={props.isAuth}>
                    <News/>
                </CheckAuth>
            </Route>
            <Route path={'/news/:id'} exact>
                <CheckAuth isAuth={props.isAuth}>
                    <DetailNews/>
                </CheckAuth>
            </Route>
            <Route path={'/form'} exact>
                <UserForm/>
            </Route>
        </Switch>
    )

}
export default Routes