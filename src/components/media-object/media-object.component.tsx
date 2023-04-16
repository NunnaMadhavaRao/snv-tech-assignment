import { Grid, Typography, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: any) =>
    createStyles({
        blogImage: {
            width: "150px",
            height: "150px"
        },
        titleColor: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "orange"
        },
        descriptionText: {
            textAlign: "justify",
            color: "grey",
            fontSize: "16px"
        },
        titleText: {
            textAlign: "justify",
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
        }
    }),
);

interface Blog {
    id: string
    title: string
    img: string
    description: string
    author: string
}

function MediaObject(props: any) {
    const classes = useStyles();
    let blog: Blog = props.blog;

    return (
        <Grid container direction="row" xs={12} alignItems="center" justifyContent='flex-start' spacing={2} style={{ marginTop: "3rem" }} >
            <Grid item xs={12} md={2} >
                {blog.img && <img alt="" src={blog.img} className={classes.blogImage} />}
            </Grid>
            <Grid item xs={12} md={10}>
                <Grid container direction="row" alignItems="center" justifyContent='flex-start' spacing={2}>
                    <Grid item>
                        {blog.title && <Typography variant="subtitle2" className={classes.titleText} >{blog.title} </Typography>}
                    </Grid>
                    <Grid item>
                        {blog.description && <Typography variant="subtitle2" className={classes.descriptionText} >{blog.description} </Typography>}
                    </Grid>
                    {blog.author &&
                        <Grid item>
                            <Typography variant="subtitle2">By - {blog.author}</Typography>
                        </Grid>}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MediaObject;