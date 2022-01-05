import React from 'react';
import { makeStyles,Theme ,createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NumberLiteralType } from 'typescript';

const useStyles = makeStyles((theme)=>({
    cardContainer: {
    width: "346px",
    margin: 10,
    height: "200px",
    border: "0.5px solid #E5E5E5",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  },
  btn: {
    textTransform: "capitalize",
    left: "2em",
    top: "-12px",
    width: "90%",
    height: "33px",
    textAlign: "center",
    paddingInline: "5em",
    fontFamily: "Poppins",
    fontSize: "10px",
    lineHeight: "15px",
    color: "#333333",
  },
    actionArea: {
    width: "100%",
    display: "flex",
     [theme.breakpoints.down("md")]: {
       width: "100%",
       marginLeft: "-9px",
     },
  },
  image: {
    width: "125px",
    borderRadius: 4,
    margin: 10,
    objectFit: "contain",
    height: "20vh"
  },
  content: {
    marginTop: "-20px"
  },
  font: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight:600,
    fontSize: "14px",
    lineHeight: "18px",
  },
  offer: {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "normal",
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
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: " 15px",
    letterSpacing: "0.2px",
  }
}));

interface Props{
  image:string;
  productName:string;
  offer:string;
  rs:string;
}

const  ProductCard:React.FC<Props>=(props)=> {
  const classes = useStyles();
return (
    <div>
      <Card className={classes.cardContainer} >
        <CardActionArea className={classes.actionArea} >
          <CardMedia classes={{ media: classes.image }}
            component="img"
            alt="Contemplative Reptile"
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h3" component="h5" className={classes.font} >
              {props.productName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.offer} >
              {props.offer}
            </Typography>
            <Typography variant="body2"  component="p" className={classes.Rs} >
              {props.rs}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.originalprice} >
             <span><s>{props.rs}</s></span>
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="outlined" fullWidth className={classes.btn}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default ProductCard;