import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import QuantityCompMbView from './QuantityCompMbView';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "23vw",
    height: "30vh",
    margin:"10px",
    border: "0.5px solid #E5E5E5",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 1%)",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      width: '80vw',
      marginLeft: '14px',
    },
  },
  MuiCardActionArearoot: {
    width: "100%",
    display: "flex",
  },
  btn: {
    borderRadius: "7rem",
    // height: "vh",
    // width: "0"
  },
  image: {
    width: "125px",
    borderRadius: 4,
    margin: 10,
    objectFit: "contain",
    height: "20vh"
  },
  font: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight:600,
    fontSize: "14px",
    lineHeight: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "revert",
      fontWeight: "bold",
    },
  },
  offer: {
    fontFamily: "Catamaran",
    fontSize: "10px",
    lineHeight: "16px",
    width: "58px",
    height: "17.61px",
  },
  Rs: {
    marginTop: theme.spacing(1),
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#31A05F",
    width: "98px",
    height: "17.61px",
  },
  originalprice: {
    fontFamily: " Poppins",
    fontStyle: "normal",
    fontWeight:500,
    fontSize: "10px",
    lineHeight:"15px",
    marginTop: theme.spacing(1),
    letterSpacing: "0.2px",
  }

}));

interface Props {
  image:string;
  productName:string;
  offer:string;
  rs:string;
}
const ImgMediaCard:React.FC<Props>=(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea className={classes.MuiCardActionArearoot} >
        <CardMedia classes={{ media: classes.image }}
          component="img"
          alt="Contemplative Reptile"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h3" component="h5" className={classes.font} >
            {props.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.offer} >
            {props.offer}
          </Typography>
          <Typography variant="body2"  component="p" className={classes.Rs} >
            {props.rs}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.originalprice}>
            <span> <s>{props.rs} </s> </span>
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <QuantityCompMbView />
      </CardActions>
    </Card>
  );
}
export default ImgMediaCard;