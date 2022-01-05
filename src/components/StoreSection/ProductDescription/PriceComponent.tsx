import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
    fontFamily: "Poppins",
    fontStyle: "normal",
  },
  price: {
    color: '#012FB7',
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  Oprice: {
    paddingLeft: "1em",
    height: "0px",
  },
  discount: {
    paddingLeft: "1em",
    color: '#16A000',
    fontWeight:600,
},
  shareicon: {
    marginLeft: "21em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2em"
    },
  },
    btn: {
      height: "5vh",
      minWidth: "2.5vw",
    },
  
}));

export default function PriceComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h5" className={classes.price}>
        <span>&#8360;1500.00</span>
      </Typography>
      <Typography  component="h5" color="secondary" className={classes.Oprice}>
        <span><s>&#8360;1.500</s></span>
      </Typography>
      <Typography  component="h5"  className={classes.discount}>
        50%off
      </Typography>
      <Button classes={{ root: classes.btn }} className={classes.shareicon} variant="outlined" size="small">
        <IconButton aria-label="add" size="small">
          <ShareIcon fontSize="inherit" />
        </IconButton>
      </Button>
    </div>
  );
}