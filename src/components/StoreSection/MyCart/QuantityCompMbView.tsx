import React from 'react';
import { makeStyles,IconButton,Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles =makeStyles((theme)=>({
    root: {
      display:"flex",
      flexDirection:"row",
      paddingLeft:"1em",
      alignItems:"center",
      marginTop:"-20px",
      [theme.breakpoints.down("md")]: {
        marginTop:"-18px",
      },
    },
    btn:{
       height:"3.2vh",
       minWidth:"1vw",
       margin:theme.spacing(0,2),
    },
    outline:{
        padding: "5px 1px",
        borderRadius: "50%",
    },
    qty:{
      fontSize:"15px",
      fontWeight:500,
      fontFamily: "Poppins",
      lineHeight: "28px",
    },
    delicon:{
      paddingLeft:"4em",
      size:"small",
      [theme.breakpoints.down("md")]: {
        marginLeft:"em",
     },
    },
    icon:{
      fontSize:"12px"
    }
}));
export default function QuantityCompMbView() {
    const classes = useStyles();
  
    return (
        <>
      <div className={classes.root}>
       <Typography variant="h6" component="h6" gutterBottom className={classes.qty}>
           Qty 
      </Typography>
      <Button classes={{root:classes.btn,outlined:classes.outline}} variant="outlined">
      <IconButton aria-label="delete"  size="small" className={classes.icon}>
        <RemoveIcon fontSize="inherit"   />
      </IconButton>
      </Button>
      <Typography variant="body2" color="textSecondary" component="p" >
           1
      </Typography>
      <Button classes={{root:classes.btn,outlined:classes.outline}} variant="outlined">
      <IconButton className={classes.icon} aria-label="add" size="small">
        <AddIcon fontSize="inherit"  />
      </IconButton>
      </Button>
      <IconButton aria-label="delete" className={classes.delicon}  >
        <DeleteOutlineIcon  />
      </IconButton>
      </div>
        </>

    );
}