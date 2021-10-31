import React, {MouseEvent, useState} from 'react';
import {Box, Button, Grid, InputLabel, Typography} from "@material-ui/core";
import useStyles from "./style";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {IForm, LoginResponse} from "./types";
import Input from "../../components/Input/Input";
import {useHttp} from "../../hooks/useHttp";
import {useAuthContext} from "../../context/AuthProvider";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "./schema";


const UserForm = () => {
    const classes = useStyles()
    const {request} = useHttp()
    const [typeButton, setTypeButton] = useState('')
    const {handleSubmit, control, formState:{errors}} = useForm<IForm>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })
    const auth = useAuthContext()
    const registerHandler = async (data: IForm) => {
        try {
            await request('/auth/register', 'POST', {...data})
        } catch (e) {

        }
    }
    const loginHandler = async (data: IForm) => {
        try {
            const response: LoginResponse = await request('/auth/login', 'POST', {...data})
            //@ts-ignore
            auth.login(response.token, response.userId)
        } catch (e) {

        }
    }
    const getTypeButton = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        setTypeButton(target.innerText.toLowerCase())
    }
    const onSubmit: SubmitHandler<IForm> = (formData) =>
        typeButton === 'регистрация' ? registerHandler(formData) : loginHandler(formData)
    return (
        <Grid container className={classes.wrapper}>
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Typography className={classes.title} variant={'h4'}>Account Login</Typography>
                <Grid container className={classes.fields}>
                    <Box>
                        <Grid item className={classes.item}>
                            <InputLabel className={classes.label} htmlFor={'login'}>Login</InputLabel>
                            <Controller name={'email'}
                                        control={control} render={({field}) =>
                                <Input id={'login'} placeholder={'login'} {...field}/>
                            }/>
                            <ErrorMessage errorType={!!errors?.email}>
                                {errors?.email?.message}
                            </ErrorMessage>
                        </Grid>
                        <Grid item className={classes.item}>
                            <InputLabel className={classes.label} htmlFor={'password'}>Password</InputLabel>
                            <Controller name={'password'}
                                        control={control} render={({field}) =>
                                <Input id={'password'}
                                       placeholder={'Password'}
                                       type={'password'}
                                       {...field}
                                        errorHandler={{
                                            [classes.inputError]: errors?.password
                                        }}
                                />
                            }/>
                            <ErrorMessage errorType={!!errors?.password}>
                                {errors?.password?.message}
                            </ErrorMessage>
                        </Grid>
                    </Box>

                    <Grid item className={classes.button} onClick={getTypeButton}>
                        <Button type={'submit'} variant={'contained'}>Регистрация</Button>
                        <Button type={'submit'} variant={'contained'}>Авторизация</Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default UserForm;