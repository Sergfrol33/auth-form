import React, {FC, forwardRef} from 'react';
import { TextField} from "@material-ui/core";
import useStyles from "./style";
import cn from 'classnames'

/**
 * If you want style input, use prop className
 * prop expect class label or input from useStyles
 */
interface Props{
    className?:string
    id?: string
    placeholder?: string
    type?: string
    errorHandler?: any
    inputProps?: any
}
const Input:FC<Props> = forwardRef((props,ref) => {
    const {type,className,id,placeholder,errorHandler,...other} = props
    const classes = useStyles()

    return <TextField type={type} inputProps={props.inputProps} className={cn(className ?? classes.input,errorHandler)}
                      {...other} id={id} placeholder={placeholder}/>

})

export default Input;