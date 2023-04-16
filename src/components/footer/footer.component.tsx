import React from 'react';
import { Container, Grid, Typography, createStyles, makeStyles } from '@material-ui/core';
import deviceMock from '../../assets/device-mock.png';
import appStore from '../../assets/app-store.svg';
import playStore from '../../assets/playstore.svg';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        p0: {
            padding: '0px'
        },
        mediaSection: {
            textAlign: 'right'
        },
        footer: {
            marginTop: '170px',
            background: "#212121",
            color: "white",
            minHeight: '400px'
        },
        smallDevice: {
            width: "180px",
            position: 'relative',
            marginRight: "-20px",
        },
        smOverlayImg: {
            position: 'absolute',
            width: "calc(100% - 36px)",
            left: '18px',
            right: '18px',
            height: "calc(100% - 48px)",
            top: '22px',
            bottom: '22px',
            borderRadius: '14px'
        },
        largeDevice: {
            position: 'relative',
            width: "240px",
        },
        lgOverlayImg: {
            position: 'absolute',
            width: "calc(100% - 48px)",
            left: '24px',
            right: '24px',
            height: "calc(100% - 65px)",
            top: '29px',
            borderRadius: '20px'
        },
        storeIcon: {
            width: '60px',
            padding : '5px',
            borderRadius : '8px',
            margin : '1px',
            background: "rgba(225,225,225,.5)"
        }
    }),
);

function Footer(props: any) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={`${classes.p0} ${classes.footer}`}>
            <Container maxWidth="xl">
                <Grid container direction="row" alignItems="center" justifyContent="center" >
                    <Grid item xs={12} md={6} >
                        <Typography variant='h3' style={{lineHeight: 1.4}}>Stay Updated <br></br> With Our <br></br> App!!</Typography>

                        <Grid container direction="row" alignItems="center" style={{marginTop : "60px"}}>
                            <Typography  variant='h6' style={{marginRight : '30px', color:"orangered", fontWeight:'bold'}}>
                                Download now!
                            </Typography>

                            <div>
                                <img className={classes.storeIcon} src={playStore} alt="playstore" />
                                <img className={classes.storeIcon} src={appStore} alt="app store" />
                            </div>
                        </Grid>


                    </Grid>
                    <Grid item xs={12} md={6} className={classes.mediaSection}>
                        <Grid container direction="row" justifyContent='flex-end' alignItems='baseline' style={{ marginTop: "-100px" }}>
                            <Grid className={classes.smallDevice}>
                                <img src={deviceMock} width={"180px"} alt='sm' />
                                <img src='https://fastly.picsum.photos/id/612/180/300.jpg?hmac=I8jBKtXhCDaGYdafY3wNblRia6QkdSgpTuVcil6qhcg' alt='' className={classes.smOverlayImg}></img>
                            </Grid>
                            <Grid className={classes.largeDevice}>
                                <img src={deviceMock} width={"240px"} alt='lg' />
                                <img src='https://fastly.picsum.photos/id/612/180/300.jpg?hmac=I8jBKtXhCDaGYdafY3wNblRia6QkdSgpTuVcil6qhcg' alt='' className={classes.lgOverlayImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </Container>
    );
}

export default Footer;