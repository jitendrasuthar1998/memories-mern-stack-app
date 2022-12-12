import React from 'react'
import { useSelector } from 'react-redux';
import { Post } from './Post/Post'
import useStyles from './postsStyle';

export const Posts = () => {
    const classes = useStyles();

    const posts = useSelector((state) => state.posts)
    console.log("posts at Posts is == ", posts)
    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
