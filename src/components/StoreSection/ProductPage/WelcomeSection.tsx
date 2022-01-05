import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import SocialMediaicon from "./SocialMediaicon";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    textAlign: "center",
    marginTop: "1em",
    fontFamily: "poppins",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  btn: {
    // width: "30vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "4em",
    width: "323px",
    height: " 36px",
    textTransform: "capitalize",
    border: "1px solid #DDDDDD",
    borderRadius: "0.7rem",
    color: "#333333",
    fontFamily: "poppins",
    [theme.breakpoints.down("md")]: {
      width: "44ch",
      marginLeft: "5%",
    },
  },
  btncontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    rowGap: "20px"
  },
  img: {
    marginRight: " 1.2rem"
  },
  image: {
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
      width: "375px",
    },
  }
}));

export default function WelcomeSection() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <img className={classes.image} src="image1.png" height="241px" width="658px" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" className={classes.center}>
            Welcome to My Store
            <Typography color="textSecondary" gutterBottom >
              Description
            </Typography>
          </Typography>
        </Grid>
        <div className={classes.btncontainer}>
          <Button className={classes.btn} size="medium" variant="outlined"  >
            <img src="logo192.png" height="22vh" className={classes.img} /> My chereographys
          </Button>
          <Button className={classes.btn} size="medium" variant="outlined"  >
            <img src="logo192.png" height="22vh" className={classes.img} />My Skincare Routine & Tips
          </Button>
        </div>
        <Grid item xs={12}>
          <SocialMediaicon />
        </Grid>
      </Grid>
    </div>
  );
}