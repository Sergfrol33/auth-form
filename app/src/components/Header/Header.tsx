import React from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import {useAuthContext} from "../../context/AuthProvider";
import useStyles from "./style";
import {Link} from 'react-router-dom'
const Header = () => {
    const classes = useStyles()
    //@ts-ignore
    const {logout} = useAuthContext()
    return (
        <Grid item component={'header'}>
            <Container maxWidth={"lg"}>
                <Grid container className={classes.row}>
                    <Grid item>
                        <Link to={'/news'}>news</Link>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} onClick={logout} variant={"contained"}>Logout</Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Header;