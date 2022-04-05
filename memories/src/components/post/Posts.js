import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import img from "./Images/memories.png";
import { postData } from "../../actions/posts";
import {useDispatch} from 'react-redux'
import { deletePosts,increaseLikesAction} from "../../actions/posts";

export const Posts = ({post}) => {
  const [update,forceUpdate]=useState(false)
  
  const classes = useStyles();
  const dispatch = useDispatch()


  

 const increaseLikes=(e)=>{
  //  e.preventDefault()
  dispatch(increaseLikesAction(post._id))

  
 window.location.reload(false);
  
 }

  const deletePost=(e)=>{
    // e.preventDefault()
    dispatch(deletePosts(post._id))
    window.location.reload(false);
  }

  const sendToForm=(e)=>{
    e.preventDefault()
    dispatch(postData(post))
  }
var date=new Date(post.createdAt)

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={sendToForm}>
              {/* <MoreVertIcon /> */}
              <ChevronRightIcon />
            </IconButton>
          }
          title={post.creator}
          subheader={date.toDateString()}

        />
        <CardMedia component="img" height="194" image={post.filename} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.tags}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"></IconButton>
          <IconButton aria-label="share"></IconButton>
        </CardActions>

        <CardContent>
         
          <Typography paragraph>
            {post.message}
          </Typography>

          <div className={classes.iconSection}>
            <IconButton >
              <ThumbUpIcon />

              <Typography>Like</Typography>
              
            </IconButton>
            {/* <Typography>{post.likeCount}</Typography> */}
            <IconButton
              sx={{
                mx: 18,
              }}
              className={classes.DeleteIcon}
              onClick={deletePost}
            >
              <DeleteIcon />
              <Typography>Delete</Typography>
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
