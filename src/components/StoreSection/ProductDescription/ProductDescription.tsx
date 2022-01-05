import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core';
import ReviewComponent from "./ReviewComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: '2em',
},
  heading: {
    fontWeight:600,
    fontSize: "18px",
    width: "318px",
    height: " 24px",
    paddingBottom: "0.5em",

  }
}));

export default function ProductDescription() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h6" component="h6" gutterBottom className={classes.heading}>
          Product Description
        </Typography>
        <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
      <ReviewComponent />
    </>
  );
}