import React, {FC} from 'react';
import {Typography} from "@material-ui/core";

import useStyles from "./style";

interface Props {
    errorType: boolean
    className?: string
}
const ErrorMessage:FC<Props> = (props) => {
    const classes = useStyles()
    return (
       <>
           {props.errorType && <Typography className={props.className ?? classes.error}>
               {props.children}
           </Typography>}
       </>
    );
};

export default ErrorMessage;