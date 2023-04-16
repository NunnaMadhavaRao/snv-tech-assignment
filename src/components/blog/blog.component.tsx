import { Box, Button, Card, Container, Grid, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        customCard: {
            padding: "20px",
            marginTop: "-15vh",
            minHeight: '400px'
        },
        customOutlinedButton: {
            color: "orangered",
            outline: "orangered"
        },
        customFilledButton: {
            backgroundColor: 'orangered',
            color: "white",
            width: "100%",
            borderRadius: "5px"
        },
        title: {
            fontWeight: 600,
        },
        titlecolor: {
            color: "blue"
        },
        description: {
            color: "grey"
        }
    }),
);

const details = {
    title: "Web development",
    name: "Something",
    category: "Software",
    date: "16 Apr, 2023",
    tags: [],
    count: "10000"
}

function Blog(props: any) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Card className={classes.customCard}>
                <Grid container direction="row" justifyContent="space-between" >
                    <Box alignItems='left'>
                        <Typography variant='h6' className={classes.title}>{details.title}</Typography>
                        <Typography variant='body2' className={classes.titlecolor}>{details.name} </Typography>
                        <Typography variant='body2' className={classes.titlecolor}>Category : {details.category}</Typography>
                        <Typography variant='body2' className={classes.description}>{details.date}</Typography>
                    </Box>
                    <Box >
                        <Button variant="outlined" className={classes.customOutlinedButton}>Follow <AddIcon fontSize='small' /></Button>
                    </Box>
                </Grid>

                <Grid item xs={12} style={{ marginTop: "1rem" }}>
                    <Typography variant='subtitle2' className={classes.description}>
                        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
                        Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding.[2] Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills.
                        For larger organizations and businesses, Web development teams can consist of hundreds of people (Web developers) and follow standard methods like Agile methodologies while developing Web sites.[1] Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.[3] Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers. Since the commercialization of the Web with Tim Berners-Lee[4] developing the World Wide Web at CERN, the industry has boomed and has become one of the most used technologies ever.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" style={{ marginTop: "2.5rem" }}>
                        <Grid item xs={11}>
                            <Box style={{display: "flex", alignItems: "center" }}>
                                <VisibilityIcon />
                                <Typography variant='body2' style={{paddingLeft : "5px"}} > {details.count}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" className={classes.customFilledButton} style={{

                            }}>Share</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Card>
        </Container>
    );
}

export default Blog;