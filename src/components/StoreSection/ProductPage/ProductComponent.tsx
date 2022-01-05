import React from 'react';
import { makeStyles,Theme, Typography, CardActions, CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ProductimageArray from './ProductimageArray';
import ProductCollection from './ProductCollection';

const useStyles=makeStyles((theme) => ({
  SkinComponent:{
       display:"flex",
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center",
  },
  root: {
    width: "53vw ",
    height: "456px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },

  image: {
    height: "298px",
    width: "49vw",
    marginLeft: "-170px",
    border: "2px sollid blue",
    [theme.breakpoints.down("md")]: {
      width: "95vw",
      marginLeft: "-9px",
    },
  },

  MuiCardAction: {
    width: "50vh"
  },
   addeditem: {
    paddingRight: "29em",
    // fontWeight: "600",
    lineHeight: "150%",
    letterSpacing: "0.5px",
     [theme.breakpoints.down("md")]: {
       paddingRight: "5em",
     },
  },
  typo: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"1em",
    fontFamily:"Poppins",
    fontStyle:"normal",
    fontSize:"14px",
    marginTop:"2em",
  },
}));

export default function ProductComponent() {
  const classes = useStyles();
return (
    <>
     <div className={classes.SkinComponent}>
      <div className={classes.typo}>
        <Typography className={classes.addeditem} variant="body1" component="h2" gutterBottom >
          Favourite Skin Care
        </Typography>
        <Typography color="textSecondary" gutterBottom >
          4 Products
        </Typography>
      </div>
      <Card className={classes.root}>
        <CardActionArea className={classes.MuiCardAction} >
          <CardMedia classes={{ media: classes.image }}
            component="img"
            image="image1.png"
          // autoPlay
          />
        </CardActionArea>
        <CardActions>
          {ProductimageArray.map((img, index) => {
            return (
              <ProductCollection
                key={img.key}
                image={img.image}
                rs={img.rs}
              >
              </ProductCollection>
            );
          })}
        </CardActions>
      </Card>
      </div>
    </>
  );
}