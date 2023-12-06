import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post/Post";
import useStyles from "./postsStyle";
import { CircularProgress, Grid } from "@material-ui/core";
export const Posts = (props) => {
  const { setCurrentId } = props;

  const classes = useStyles();

  const posts = useSelector((state) => state.posts);
  // console.log("posts at Posts is == ", posts)
  return !posts.length ? (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={3}
    >
      No Post Available
    </Grid>
  ) : (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
