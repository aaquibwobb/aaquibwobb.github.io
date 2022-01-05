import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

  summarybox: {
    width: "21vw",
    border: "0.5px solid #E5E5E5",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0)",
    borderRadius: "10px",
    margin: theme.spacing(1),
    paddingInline: "14px",
    [theme.breakpoints.down("md")]: {
      width: '72vw',
      margin: "14px",
    },
  },
  item: {
    paddingLeft: "20px"
  },
  p: {
    fontFamily: "Poppins",
    fontSize: "16px",
    letterSpacing: "0.2px",
    paddingLeft: "5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "4em",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontWeight:600,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
  },
  total: {
    fontFamily: "Poppins",
    fontWeight:600,
  },

}));

export default function OrderSummary() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.summarybox}>
        <p className={classes.title} > Order Summary </p>
        <Grid container >
          <Grid item xs={6}>
            <p>Total Items</p>
            <p>TotalPrice</p>
            <p>Total Discount</p>
            <p>Shipping</p>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <p className={classes.p}><span>&#8377;2</span></p>
            <p className={classes.p}><span>&#8377;4402</span></p>
            <p className={classes.p}><span>&#8377;402</span></p>
            <p className={classes.p}><span>&#8377;50</span></p>
          </Grid>
          <Grid item xs={12}>
            <Divider/>
          </Grid>
          <Grid xs={6}>
            <p className={classes.total}>Grand Total</p>
          </Grid>
          <Grid xs={6}>
            <p className={classes.p}><span>&#8377;4402</span></p>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}