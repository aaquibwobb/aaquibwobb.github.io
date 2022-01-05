import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DataArray from "./CardDataArray";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
    div: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "55%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
}));
const CardCollectionComponent=()=>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
        {DataArray.map((item) => {
          return (
            <ProductCard
              key={item.key}
              image={item.image}
              productName={item.productName}
              offer={item.offer}
              rs={item.rs}
              >
          </ProductCard>
          );
        })}

      </div>

    );
};
export default CardCollectionComponent;
