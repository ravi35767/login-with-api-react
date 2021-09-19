import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(5, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    studentBtn: {
        margin: theme.spacing(0, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function WelcomePage() {
    const classes = useStyles();
    const history = useHistory();
    const goToTeacharProfile = () => {
        history.push("/teacher-profile")
    }

    const goToStudentProfile = () => {
        history.push("/student-profile")
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    Welcome to Admin Page
                    {/* <Button
                        type="submit"

                        variant="contained"
                        color="primary"
                        onClick={goToTeacharProfile}
                    >
                        Teacher Profile
                    </Button> */}
                </div>
                {/* <div className={classes.studentBtn}>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={goToStudentProfile}
                    >
                        Student Profile
                    </Button>
                </div> */}
            </Grid>
        </Grid>
    );
}