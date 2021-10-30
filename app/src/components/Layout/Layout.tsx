import React, {FC} from 'react';
import {Grid} from "@material-ui/core";
import useStyles from "./style";
import Header from "../Header/Header";

const Layout:FC = (props) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Header/>
            <Grid item component={'main'} className={classes.main}>
                {props.children}
            </Grid>
            <Grid item component={'footer'}>footer</Grid>
        </Grid>
    );
};

export default Layout;