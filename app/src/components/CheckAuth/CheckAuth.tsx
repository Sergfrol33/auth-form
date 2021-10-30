import React, {FC} from 'react';
import {Redirect} from "react-router-dom";

interface Props {
    isAuth: boolean
}
const CheckAuth:FC<Props> = (props) => {
    return (
       <>
           {props.isAuth ? props.children : <Redirect to={'/form'}/>}
       </>
    );
};

export default CheckAuth;