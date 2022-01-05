import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductImageArray from './ProductImageArray';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        height: "5vh",
        minWidth: "2.5vw",
        borderRadius: "4px",
        alignItems: "center",
        //  background:"red",
        [theme.breakpoints.down("md")]: {
            width: "5ch",
            height: "5vh"
        },
    },
    selectheading: {
        fontWeight:600,
        fontSize: "18px",
        paddingTop: "0.5em",
        width: "439px",
        height: "36px",
    },
  }));

export default function SelectColorComponent() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6" component="h6" className={classes.selectheading}>
                Select Color
            </Typography>
            {ProductImageArray.map((btn, index) => {
                return (
                    <>
                    <Button variant="contained" classes={{ root: classes.root }} ></Button>
                    </>
                );
            })}
        </div>

    );
}
