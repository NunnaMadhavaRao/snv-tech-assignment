import { Container, Grid, TextField, Typography, Button, createStyles, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        posRelative: {
            position: 'relative',
        },
        buttonOverlay: {
            position: 'absolute',
            top: '50%',
            right: '5px',
            transform: "translate(0,-50%)"
        }
    }),
);

function Subscribe(props: any) {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" style={{
            background: "orange",
            borderRadius: "5px",
            padding: "3rem",
            marginTop: "6.5rem"
        }}>
            <Grid item xs={12}>
                <Grid container direction='row' alignItems='center' >
                    <Grid item xs={4}>
                        <Typography style={{ color: "white", fontSize: "13px", fontWeight: "bold" }}>Lorem ipsumLorem</Typography>
                        <Typography style={{ color: "white", fontSize: "13px", fontWeight: "bold" }}>ipsum lorem</Typography>
                        <Typography style={{ color: "white", fontSize: "13px", fontWeight: "bold" }}>ipsumLorem lorem</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid className={classes.posRelative}>
                            <TextField variant='outlined'
                                fullWidth
                                style={{
                                    background: "white",
                                    border: "5px solid orange",
                                    outline: 'none'
                                }}
                            />
                            <Button variant="contained" className={classes.buttonOverlay}><ArrowForwardIosIcon /></Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Container>
    );
}

export default Subscribe;