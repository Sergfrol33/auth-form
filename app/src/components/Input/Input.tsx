import React, {FC, forwardRef} from 'react';
import { TextField} from "@material-ui/core";
import useStyles from "./style";

/**
 * If you want style input, use prop className
 * prop expect class label or input from useStyles
 */
interface Props{
    className?: {
        input?: string
    }
    id?: string
    placeholder?: string
    type?: string
}
const Input:FC<Props> = forwardRef((props,ref) => {
    const {type,className,id,placeholder,...other} = props
    const classes = useStyles()
    return <TextField type={type} className={className?.input ?? classes.input}
                      {...other} id={id} placeholder={placeholder}/>

})

export default Input;