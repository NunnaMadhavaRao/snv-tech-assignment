import { Box, Button, Card, Container, Grid, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MediaObject from '../media-object/media-object.component';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        customCard: {
            padding: "20px",
            marginTop: "-15vh",
            minHeight: '400px',
            marginBottom: '40px'
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
        subTitle: {
            color: 'orangered',
            fontWeight: 600
        },
        titlecolor: {
            color: "blue"
        },
        description: {
            color: "grey",
            marginBottom: '8px'
        }
    }),
);

const details = {
    title: "The Importance of Conserving and Sustaining Nature for a Healthy and Prosperous Future",
    name: "Something",
    category: "Environmental Science",
    date: "16 Apr, 2023",
    tags: [],
    count: "10000"
}

const recommendedBlogs = [
    {
        id: "1",
        title: "Amazon Rainforest",
        img: 'https://fastly.picsum.photos/id/1003/200/200.jpg?hmac=w2SN03yog7_RB-IfnyWX1FtBjSHebnoWD35Lj4-iV7o',
        description: "The Amazon Rainforest, also known as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon Basin in South America. It is home to a diverse range of wildlife, including jaguars, anacondas, macaws, and sloths.",
        author: "Various indigenous tribes and countries in South America"
    },
    {
        id: "2",
        title: "Mount Everest",
        img: 'https://fastly.picsum.photos/id/684/200/200.jpg?hmac=Al0pymCRQr_mB6OlD9xW3UsgmSKDgnNPq2JLj3_CfUY',
        description: "Mount Everest is the highest mountain in the world, standing at 8,848 meters (29,029 feet). It is located in the Mahalangur Himal sub-range of the Himalayas and straddles the border between Nepal and Tibet.",
        author: "Nepal and Tibet"
    }
]

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
                        Nature is the foundation of life on earth and encompasses everything from the smallest microorganisms to the largest ecosystems. It provides us with the resources we need to survive and thrive, including clean air, water, food, and medicine. Yet, despite its immense value, human activities have put nature under tremendous pressure, resulting in widespread degradation, loss of biodiversity, and climate change.
                    </Typography>
                    <Typography variant='subtitle2' className={classes.description}>
                        One of the greatest challenges facing humanity today is how to sustainably manage our natural resources while meeting our current and future needs. This requires a fundamental shift in our relationship with nature, one that recognizes the interconnectedness of all living things and the critical role that nature plays in our well-being.
                    </Typography>
                    <Typography variant='subtitle2' className={classes.description}>
                        One way to achieve this shift is through conservation efforts that aim to protect and restore ecosystems and their biodiversity. This includes actions such as habitat restoration, species reintroduction, and the establishment of protected areas, all of which have been shown to be effective in conserving nature.
                        Another important approach is the promotion of sustainable development, which seeks to balance economic growth with environmental protection and social well-being. This requires a focus on practices that minimize the negative impact of human activities on nature, such as reducing greenhouse gas emissions, adopting sustainable agriculture and forestry practices, and transitioning to renewable energy sources.
                    </Typography>
                    <Typography variant='subtitle2' className={classes.description}>
                        In conclusion, nature is essential for our survival and well-being, and its conservation and sustainable management are critical for ensuring a healthy and prosperous future for both humanity and the planet. By recognizing the value of nature and taking action to protect and restore it, we can create a more sustainable and resilient world for ourselves and future generations.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" style={{ marginTop: "2.5rem" }}>
                        <Grid item xs={11}>
                            <Box style={{ display: "flex", alignItems: "center" }}>
                                <VisibilityIcon />
                                <Typography variant='body2' style={{ paddingLeft: "5px" }} > {details.count}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" className={classes.customFilledButton} style={{

                            }}>Share</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Card>

            {/* recommended Blogs */}

            <Grid container direction="row">

                <Typography variant='h5' className={classes.subTitle} >Recommended Blogs</Typography>

                {
                    recommendedBlogs && recommendedBlogs.length > 0 && recommendedBlogs.map(blog => {
                        return (<MediaObject blog={blog} />)
                    })
                }
            </Grid>

        </Container>
    );
}

export default Blog;