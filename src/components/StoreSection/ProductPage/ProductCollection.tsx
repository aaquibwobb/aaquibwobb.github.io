import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { NumberLiteralType } from "typescript";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "112px",
    height: "106px",
    boxSizing: "border-box",
    border: "0.5px solid #DDDDDD",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      width: "3vw",
      height: "auto",
      margin: 0
    },
  },
  image: {
    height: "100px",
    width: "112px",
    [theme.breakpoints.down("md")]: {
      width: "",
      height: "5vh",
      margin: 0
    },
  },
  btn: {
    dispaly: "flex",
    marginLeft: "10px",
    [theme.breakpoints.down("md")]: {
      margin: "auto",

    },
  },
  rs: {

    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      marginLeft: "5px"
    },
  },

}));

interface Props{
  image:string,
  rs:string,
}
const  ProductCollection:React.FC<Props> =(props)=> {
  const classes = useStyles();
  return (
    <>
      <div className={classes.btn}>
        <Button variant="outlined" className={classes.root}>
          <img className={classes.image} src={props.image} />
        </Button>
        <Typography gutterBottom className={classes.rs}>
          <span>&#8377;{props.rs}</span>
        </Typography>
      </div>
    </>
  );
};
export default ProductCollection;