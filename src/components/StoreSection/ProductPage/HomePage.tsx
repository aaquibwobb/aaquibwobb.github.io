import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import ProductComponent from "./ProductComponent";
import WelcomeSection from "./WelcomeSection";
import Header from "./Header";
import CardCollectionComponent from "./CardCollectionComponent";
const useStyles = makeStyles((theme) =>({
  container:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FAFAFA",
    },
    addeditem:{
    paddingRight: "29em",
    fontWeight:600,
    lineHeight: "150%",
    letterSpacing: "0.5px",
     [theme.breakpoints.down("md")]: {
       paddingRight: "5em",
     },
  },
  typo:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1em",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "14px",
   },
  }))

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <WelcomeSection />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.typo}>
              <Typography variant="body1" component="h2" gutterBottom className={classes.addeditem}>
                Recently Added
              </Typography>
              <Typography color="textSecondary" gutterBottom >
                4 Products
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <CardCollectionComponent />
          </Grid>
          <Grid item xs={12}>
            <ProductComponent />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
