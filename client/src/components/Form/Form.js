import { Typography, Paper, TextField, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import useStyles from './formStyle';
import Filebase from 'react-file-base64';
import { createPost, getPosts, updatePost } from '../../redux/actions/posts.action';
import { useDispatch, useSelector } from 'react-redux';


export const Form = (props) => {
    const { currentId, setCurrentId } = props;

    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData))
            dispatch(getPosts());
        }
        else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    console.log("postData is == ", postData)

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a memory</Typography>

                <TextField name='creator' variant='outlined' label="Creator" fullWidth required
                    value={postData.creator}
                    onChange={(e) => setPostData((prevState) => ({
                        ...prevState, creator: e.target.value
                    }))}
                />

                <TextField name='title' variant='outlined' label="Title" fullWidth
                    value={postData.title} required
                    onChange={(e) => setPostData((prevState) => ({
                        ...prevState, title: e.target.value
                    }))}
                />

                <TextField name='message' variant='outlined' label="Messsage" fullWidth required
                    value={postData.message}
                    onChange={(e) => setPostData((prevState) => ({
                        ...prevState, message: e.target.value
                    }))}
                />

                <TextField name='tags' variant='outlined' label="Tags" fullWidth
                    value={postData.tags} required
                    onChange={(e) => setPostData((prevState) => (
                        { ...prevState, tags: e.target.value.split(",") }
                    ))}
                />

                <div className={classes.fileInput}>
                    <Filebase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData((prevState) => ({ ...prevState, selectedFile: base64 }))}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color='primary' fullWidth size='large' type='submit'>Submit</Button>

                <Button variant="contained" color='secondary' fullWidth size='small' onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}
