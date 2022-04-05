import { CircularProgress, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Form } from "../form/Form";
import { Posts } from "../post/Posts";
import { Title } from "../Title/Title";
import useStyles from "./styles.js";

export const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, getPosts]);

  return (
    <div>
      <Title />

      <div className={classes.OuterBox}>
        <Box sx={{ width: "50%" }} className={classes.InnerBox}>
          {!posts.length ? (
            <CircularProgress />
          ) : (
            <>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {posts.map((post) => (
                  <Grid key={post._id} item xs={6}>
                    <Posts post={post} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
        <Form />
      </div>
    </div>
  );
};
