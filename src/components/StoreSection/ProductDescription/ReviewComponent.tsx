import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: "1.5em",
    paddingBottom: "1em",
  },
  btn: {
    height: "4vh",
    minWidth: "1vw",
    padding:"2px",
  },
  outline: {
     padding: "1px 0px",
    borderRadius: "50%",
    border: "2px solid #012FB7",
    background:"",
  },
  icon: {
    fontSize: "19px",
    color:"#012FB7",
  },
  review: {
    fontFamily:"Poppins",
    fontWeight:500,
    fontSize:"16px",
    paddingTop: "0.2em",
    color: "#012FB7",
    paddingLeft: "0.2em",
  }
}));

export default function ProductDescription() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button classes={{ root: classes.btn, outlined: classes.outline }} variant="outlined" >
        <IconButton size="small">
          <AddIcon color="primary" className={classes.icon} />
        </IconButton>
      </Button>
      <Typography variant="body2" component="h5" className={classes.review} >
        Review
      </Typography>
    </div>
  );
}