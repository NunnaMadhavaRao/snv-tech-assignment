import React from 'react';
import { Container, Grid, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        p0: {
            padding: '0px'
        },
        banner: {
            zIndex: -1
        }
    }),
);

function Banner(props: any) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.p0}>
            <Grid container direction="row" alignItems="center" justifyContent="center" >
                <Grid item xs={12} className={classes.banner}>
                    <img src="https://fastly.picsum.photos/id/402/1400/450.jpg?hmac=vLnDKtfuNRyvqVTK0pd6pJhcY0wG7qQGRNQREp62XH8" width={"100%"} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Banner;