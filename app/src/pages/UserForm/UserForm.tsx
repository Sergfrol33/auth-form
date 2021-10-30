import React, {MouseEvent, useState} from 'react';
import {Box, Button, Grid, InputLabel, Typography} from "@material-ui/core";
import useStyles from "./style";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {IForm} from "./types";
import Input from "../../components/Input/Input";
import {useHttp} from "../../hooks/useHttp";


const UserForm = () => {
    const classes = useStyles()
    const {loading, error, request} = useHttp()
    const [typeButton, setTypeButton] = useState('')
    const {handleSubmit, control} = useForm<IForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const register = async (data: IForm) => {
        try {
           const response = await request('/auth/register', 'POST', {...data})
        } catch (e) {

        }
    }
    const login = async (data: IForm) => {
        try {
            const response = await request('/auth/login', 'POST', {...data})
            localStorage.setItem('token', response.token)
        } catch (e) {

        }
    }
    const getTypeButton = (e:MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement
        setTypeButton(target.innerText.toLowerCase())
    }
    const onSubmit: SubmitHandler<IForm> = (formData) =>
        typeButton === 'регистрация' ? register(formData) : login(formData)
    return (
        <Grid container className={classes.wrapper}>
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Typography className={classes.title} variant={'h4'}>Account Login</Typography>
                <Grid container className={classes.fields}>
                    <Box>
                        <Grid item className={classes.item}>
                            <InputLabel className={classes.label} htmlFor={'login'}>Login</InputLabel>
                            <Controller name={'email'} control={control} render={({field}) =>
                                <Input id={'login'} placeholder={'login'} {...field}/>
                            }/>
                        </Grid>
                        <Grid item className={classes.item}>
                            <InputLabel className={classes.label} htmlFor={'password'}>Password</InputLabel>
                            <Controller name={'password'} control={control} render={({field}) =>
                                <Input id={'password'}
                                       placeholder={'Password'}
                                       type={'password'}
                                       {...field}
                                />
                            }/>

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