import React from 'react'
import Post from './Post/Post'
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} conintaner alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}

            </Grid>
        )
    )
};

export default Posts;
