import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "1em",
        rowGap: "5em",
    },
    Tprice: {
        fontSize: "14px",
        fontFamily:"Poppins",
        lineHeight:"21px",
        },
        price:{
            fontSize:"18px",
            lineHeight:"23px",
            color:"#012FB7",
            paddingTop:"0.5em",
        },
    btn: {
        borderRadius: "5px",
        alignItems: "center",
        width: "208px",
        height: "50px",
        textTransform: "capitalize",
        padding: "5px 40px",
        backgroundColor: "blue",
        color: "white",
        [theme.breakpoints.down("md")]: {
            width: 'max-content',
            margin: 'auto',
        },
    },
    addcartbtn: {
        paddingLeft: "3em",
        width: "100%",
        marginLeft: "80%",
        [theme.breakpoints.down("md")]: {
            width: "10vw",
            marginLeft: "10%",
        },

    }
}));

export default function PriceComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="body2" component="p" className={classes.Tprice}>
                    Total Price
                </Typography>
                <Typography color="primary" component="h4" className={classes.price}>
                    <span>&#8360;1500.00</span>
                </Typography>
            </div>
            <div className={classes.addcartbtn}>
                <Button variant="contained" size="small" className={classes.btn}>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}