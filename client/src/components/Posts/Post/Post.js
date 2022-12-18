import { Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './postStyle'

export const Post = () => {
  const classes = useStyles();
  return (
    <Typography>
      Post
    </Typography>
  )
}
