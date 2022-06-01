import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);

    return (

        <Container maxwidth="lg">
            <AppBar position='static' color='inherit' className={classes.appBar}>
                <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
                <img src={memories} alt="memories" />
            </AppBar>
            <Grow in>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;