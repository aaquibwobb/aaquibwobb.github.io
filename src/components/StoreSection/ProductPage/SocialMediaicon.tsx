import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { BsFacebook, BsInstagram } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fb: {
    color: "#5858f8",
  },
  insta: {
    background: "linear-gradient(340deg, #ffff00d4,#ff6900, #e124ba, #4d00ff)",
    color: "white",
    borderRadius: "6px",
    padding: "3px 4px",
    fontSize: "large",
  },
  youtube: {
    color: "white",
    borderRadius: "1.2em",
    padding: "2px 4px",
    backgroundColor: "red",
    fontSize: "large",
  },
  tweet: {
    color: "#0b9ed4fa",
    fontSize: "xx-large"
  }

}));

export default function SocialMediaicon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="fb" className={classes.fb} >
        <BsFacebook />
      </IconButton>
      <IconButton aria-label="insta" className={classes.insta} >
        <BsInstagram />
      </IconButton>
      <IconButton color="primary" aria-label="twitter" className={classes.tweet}>
        <TwitterIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="youtube" className={classes.youtube}>
        <YouTubeIcon />
      </IconButton>
    </div>
  );
}
