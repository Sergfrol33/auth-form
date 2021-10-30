import React, {FC} from 'react';
import {Redirect, Route} from "react-router-dom";

interface Props {
    isAuth: boolean
    path?: string
    exact?: boolean
    strict?:boolean
}
const CheckAuth:FC<Props> = (props) => {

    return (
       <Route strict={props.strict} exact={props.exact} path={props.path}>
           {props.isAuth ? props.children : <Redirect to={'/form'}/>}
       </Route>
    );
};

export default CheckAuth;