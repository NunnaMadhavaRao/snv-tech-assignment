import { Container, Grid, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: any) =>
    createStyles({
        m2: {
            margin: '0 4px',
        },
        p20: {
            padding : "20px 0",
        },
        active : {
            color : "orangered"
        }
    }),
);


function BreadCrumb(props: any) {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.p20}>
            <Grid container direction="row" alignItems="center" >
                <Typography variant='body2' className={`${classes.m2} ${classes.active}`}>Home</Typography> /
                <Typography variant='body2' className={classes.m2}>Blog</Typography> /
                <Typography variant='body2' className={classes.m2}>My new Blog</Typography>
            </Grid>
        </Container>
    );
}

export default BreadCrumb;