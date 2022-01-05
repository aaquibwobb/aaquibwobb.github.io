import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import CardDataArray from "../ProductPage/CardDataArray";
import CardComponent from "./CardComponent"
import OrderSummary from "./OrderSummary";


const useStyles = makeStyles((theme) => ({
  Card: {
    width: "25vw",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "101vw",
      marginLeft: "-9px",
    },
  },
  button: {
    width: "30%",
    textAlign: "left"
  },
}));

export default function Cartpage() {
  const classes = useStyles();
  return (
    <div className={classes.Card}>
        <Divider />
        {CardDataArray.map((item:any) => {
          return (
            <CardComponent
              key={item.key}
              image={item.image}
              productName={item.productName}
              offer={item.offer}
              rs={item.rs}
              >
            </CardComponent>
          );
        })}
        <OrderSummary />
      </div>
    );
}
