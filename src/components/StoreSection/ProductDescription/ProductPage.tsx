import React from 'react';
import {Card, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ProductViews from "./ProductViews";
import SelectSizes from "./SelectSizes";
import SelectColorComponent from "./SelectColorComponent";
import QuantityComponent from './QuantityComponent';
import ProductDescription from './ProductDescription';
import PriceComponent from './PriceComponent';
import PriceDetails from "./PriceDetails";
import Header from '../ProductPage/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FAFAFA",
    },
    card: {
        width: "75ch",
        height: "auto",
        padding: "1em 2em",
        fontFamily: "Poppins",
        [theme.breakpoints.down("md")]: {
            width: "41ch",
            height: "auto"
        },
        margin: "auto",
        },
       btn: {
        alignItems: "center",
        marginTop: "20px",
        marginLeft: "30%",
        textTransform: "capitalize",
        borderRadius: "0.2rem",
        padding: "5px 40px",
        backgroundColor: "blue",
        color: "white",
    },
    imageview: {
        [theme.breakpoints.down("md")]: {
            height: "auto"
        },
    },
    productname: {
        fontWeight:600,
        fontSize: "31px",
        lineHeight: "32px",
        paddingTop: "1em",
        paddingBottom: "0.5em"
    },
    cart: {
        border: "2px solid green",
    },
}));
export default function ProductPg() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Card variant="outlined" className={classes.card}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.imageview}> <ProductViews /></div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h3" className={classes.productname}>
                            Levi's Denim Jacket
                        </Typography>
                        <PriceComponent />
                    </Grid>
                    <Grid item xs={12} >
                        <SelectSizes />
                    </Grid>
                    <Grid item xs={12} >
                        <SelectColorComponent />
                    </Grid>
                    <Grid item xs={12} >
                        <QuantityComponent />
                    </Grid>
                    <Grid item xs={12} >
                        <ProductDescription />
                    </Grid>
                </Grid>
                <Divider />
                <Grid container>
                    <Grid item xs={6} sm={6}>
                        <PriceDetails />
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}
