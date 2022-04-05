import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from 'react-redux'
import { clearPosts, createPosts, getPosts, updatePosts } from "../../actions/posts";

export const Form = () => {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [message, setmessage] = useState("");
  const [tags, settags] = useState("");
  const [filename, setfilename] = useState("");
  const [update,forceUpdate]=useState(false)
  const [data, setData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    filename: "",
  });
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const postData= useSelector(state=>state.postData)

 useEffect(() => {
  if(postData)
  {
   
  setname(postData.creator)
  // setfilename(postData.fileName)
  settitle(postData.title)
  setmessage(postData.message)
  settags(postData.tags)

  }


 }, [postData])


  useEffect(() => {
    setData({
      creator: name,
      title: title,
      message: message,
      tags: tags,
      filename: filename,
    });
    console.log(filename)

    
  }, [name, title, message, tags, filename,]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(postData._id){
    dispatch(updatePosts(postData._id,data))
    window.location.reload(false);}

    else{
    dispatch(createPosts(data))   }  
  };

  const Clear=(e)=>{
   e.preventDefault()
   setname("")
   settags("")
   settitle("")
   setmessage("")
   setfilename("")

   dispatch(clearPosts())
  
  }

  return (
    <div>
      <Paper elevation={10} className={classes.OuterBox}>
        <Typography variant="h5" className={classes.title}>
          {title? title : "New Post"}
        </Typography>

        <TextField
          className={classes.txt}
          sx={{
            my: 2,
          }}
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <TextField
          className={classes.txt}
          id="outlined-name"
          label="Title"
          sx={{
            my: 1,
          }}
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <TextField
          className={classes.txt}
          id="outlined-name"
          label="Message"
          sx={{
            my: 1,
          }}
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <TextField
          className={classes.txt}
          id="outlined-name"
          label="Tags"
          sx={{
            my: 1,
          }}
          value={tags}
          onChange={(e) => {
            settags(e.target.value);
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setfilename(base64)}
          />
        </div>
        <Button
          variant="contained"
          sx={{
            my: 2,
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <Button variant="outlined" onClick={Clear}>CLEAR</Button>
      </Paper>
    </div>
  );
};
