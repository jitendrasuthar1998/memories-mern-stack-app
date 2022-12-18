import { Typography, Paper, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './formStyle';
import Filebase from 'react-file-base64';
import { createPost } from '../../redux/actions/posts.action';
import {useDispatch} from 'react-redux';

export const Form = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    console.log("postData is == ", postData)

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a memory</Typography>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

                <TextField name='title' variant='outlined' label="Title" fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <TextField name='message' variant='outlined' label="Messsage" fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <TextField name='tags' variant='outlined' label="Tags" fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />

                <div className={classes.fileInput}>
                    <Filebase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color='primary' fullWidth size='large' type='submit'>Submit</Button>

                <Button variant="contained" color='secondary' fullWidth size='small' onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}
