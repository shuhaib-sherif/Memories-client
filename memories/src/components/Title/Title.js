import React from "react";
import useStyles from "./styles";
import Paper from "@mui/material/Paper";
import { Card, CardMedia, Typography } from "@mui/material";
import img from "./Images/memories.png"

export const Title = () => {
  const classes = useStyles();
  return (
    <div>
        <Paper elevation={10}  className={classes.outerBox}>
          <Typography variant="h2" className={classes.text}>Memories</Typography>
          <Card className={classes.imgCard} sx={{
              boxShadow: 0
          }}>
          <CardMedia className={classes.imgCardMedia}
            component="img"
            sx={{ width: 50 }}
            image={img}
            alt="Live from space album cover"
          />
        </Card>
        </Paper>
        
     
    </div>
  );
};
