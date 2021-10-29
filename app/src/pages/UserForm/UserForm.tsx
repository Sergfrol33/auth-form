import React from 'react';
import {Box, Button, Grid, InputLabel, Typography} from "@material-ui/core";
import useStyles from "./style";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {IForm} from "./types";
import Input from "../../components/Input/Input";
import {useHttp} from "../../hooks/useHttp";


const UserForm = () => {
    const classes = useStyles()
    const {loading, error, request} = useHttp()

    const {handleSubmit, control} = useForm<IForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const onSubmit: SubmitHandler<IForm> = async (formData) => {
        try {
            const data = await request('/auth/register', 'POST', {...formData})
        } catch (e) {
        }
    }
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
                    <Grid item className={classes.button}>
                        <Button type={'submit'} variant={'contained'}>Регистрация</Button>
                        <Button type={'submit'} variant={'contained'}>Авторизация</Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default UserForm;