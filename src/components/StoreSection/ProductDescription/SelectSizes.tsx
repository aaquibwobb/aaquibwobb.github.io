import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductImageArray from './ProductImageArray';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        height: "5vh",
        minWidth: "3vw",
        alignItems: "center",
        borderRadius: "4px",
        background: "rgba(221, 221, 221, 0.5)",
        [theme.breakpoints.down("md")]: {
            width: "5ch",
        },
    },
      size: {
        fontWeight:600,
        fontSize: "18px",
        paddingTop: "0.5em",
        width: "439px",
        height: "36px",
    }
}));

export default function SelectSizes() {
    const classes = useStyles();
    return (
        <div >
            <Typography className={classes.size} variant="h6" component="h6" >
                Select Sizes
            </Typography>
            {ProductImageArray.map((btn, index) => {
                return (
                    <>
                        <Button size="small" classes={{root:classes.root}} variant="outlined">
                            {btn.btnsize}
                        </Button>

                    </>
                );
            })}
        </div>
    );
}
