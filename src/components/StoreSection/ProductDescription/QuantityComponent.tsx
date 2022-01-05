import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  btn: {
    height: "4vh",
    minWidth: "1vw",
    },
  outline: {
    padding: "5px 2px",
    borderRadius: "60px",
    border: "1px solid #DDDDDD",
  },
  qty: {
    fontSize:"18px",
    fontWeight:600,
    paddingTop: "1.5em",
    paddingBottom: "0.5em",
    width: "318px",
    height: " 24px",
  },
  noitem: {
    margin: theme.spacing(0.5, 2),
  },
  icon: {
    fontSize: "1rem"
  }
}));
export default function QuantityComponent() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" component="h6" gutterBottom className={classes.qty}>
        Quantity
      </Typography>
      <div className={classes.root}>
        <Button classes={{ root: classes.btn, outlined: classes.outline }} variant="outlined">
          <IconButton  size="small" >
            <RemoveIcon className={classes.icon} />
          </IconButton>
        </Button>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.noitem}>
          1
        </Typography>
        <Button classes={{ root: classes.btn, outlined: classes.outline }} variant="outlined" >
          <IconButton  size="small" >
            <AddIcon className={classes.icon} />
          </IconButton>
        </Button>
      </div>
    </>

  );
}