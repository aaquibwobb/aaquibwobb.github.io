import React from 'react';
import { makeStyles, Box, TextField, Typography, MenuItem, Divider,IconButton } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Header from "../ProductPage/Header";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
const currencies = [
    {

        label: 'select city',
    },
    {
        value: "greater",
        label: 'greater noida',
    },
    {
        value: "new Delhi",
        label: 'Delhi',
    },
    {
        value: "gurgaun",
        label: 'meerut',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: "44vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItem: "center",
        margin: "auto",
        padding: "2em",
        background: "white",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
    },
    container: {
        height: "345px",
        width: "695px",
        marginBottom: "1em",
        border: "1px solid #DDDDDD",
        borderRadius: "8px",
        paddingInline: "1em",
        [theme.breakpoints.down("md")]: {
            width: "77vw",
            marginLeft: "-10px",
        },
    },
    heading: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        marginTop: "1em"
    },
    formContainer: {
        paddingTop: "1em",
    },
    textfield: {
        "& .MuiTypography-body1": {
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.2px",
        },
    },

    customTextField: {
        paddingTop: "1em",
        "& input::placeholder": {
            fontFamily: "Poppins",
            fontSize: "12px",
            lineHeight: "28px",
            letterSpacing: "0.2px",
            color: "rgba(132, 132, 132, 0.8)"
        },
        "& .MuiInput-underline:after": {

            borderColor: "1px solid #DDDDDD",
        },
    },
    selectfield: {
        width: "20.2vw",
        paddingTop: "1em",
        [theme.breakpoints.down("md")]: {
            width: "47%",
        },
    },
    selectfield2: {
        width: "20vw",
        paddingLeft: "0.5em",
        paddingTop: "1em",
        [theme.breakpoints.down("md")]: {
            width: "47%",
        },
    },

    container2: {
        width: "720px",
        height: "293px",
        border: "0.5px solid #DDDDDD",
        borderRadius: "8px",
        marginTop: "1em",
        [theme.breakpoints.down("md")]: {
            width: "87vw",
            marginLeft: "-10px",
        },
    },
    p: {
        width: "670px",
        height: "30px",
        paddingTop: "13px",
        textAlign: "center",
        background: "rgba(23, 162, 0, 0.1)",
        borderRadius: "2px",
        paddingInline: "10px 0px",
        fontSize: "12px",
        lineHeight: "20px",
        [theme.breakpoints.down("md")]: {
            width: "76vw",
        },
    },
    box2: {
        padding: "1em"
    },
    div2: {
        width: "730px",
        height: "68px",
        border: "0.5px solid #DDDDDD",
        boxSizing: "border-box",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        paddingInline: "1em",
        [theme.breakpoints.down("md")]: {
            width: "88vw",
            marginLeft: "-10px",
        },
    },
    paymentbtn: {
        alignItems: "center",
        width: "298px",
        height: "52px",
        background: "#012FB7",
        color: "White",
        textTransform: "capitalize"
    },
    btncontainer: {
        marginTop: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },

    header: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        paddingRight: "30em",
        [theme.breakpoints.down("md")]: {
            paddingRight: "4.5em",
        },
    },
    paymentmethod: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.2px",
    },
    Gtotaldiv: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "2.5em"
    },
    rs: {
        paddingLeft: "40em",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "12em",
        },
    }
}));

export default function SimpleCard() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('Select City');

    const handleChange = (event: any) => {
        setCurrency(event.target.value);
    };
    const [value, setValue] = React.useState('cash on delevery');

    const hanChange = (event: any) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Header />
            <div className={classes.root}>
                <Box className={classes.container}>
                    <Typography className={classes.heading}>
                        Delevery Address
                    </Typography>
                    <div className={classes.formContainer}>
                        <TextField
                            // className={classes.textfield}
                            classes={{ root: classes.customTextField }}
                            id="standard-textarea"
                            placeholder="Full Name"
                            fullWidth
                        />
                        <TextField
                            classes={{ root: classes.customTextField }}
                            id="standard-textarea"
                            placeholder="Mobile Number"
                            fullWidth
                        />
                        <TextField
                            classes={{ root: classes.customTextField }}
                            id="standard-textarea"
                            placeholder="Pin Code"
                            fullWidth
                        />
                        <TextField
                            classes={{ root: classes.customTextField }}
                            id="standard-textarea"
                            placeholder="Delivery Address (House no. Building, Street, Area)"
                            fullWidth
                        />
                        <TextField
                            className={classes.selectfield}
                            classes={{ root: classes.customTextField }}
                            id="standard-select-currency"
                            select
                            value={currency}
                            onChange={handleChange}
                            placeholder="Select State"
                            size="medium"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            className={classes.selectfield2}
                            id="standard-select-currency"
                            select
                            value={currency}
                            onChange={handleChange}
                            placeholder="Select City"
                            size="medium"
                        >
                            {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
                        </TextField>

                    </div>
                </Box>
                <div className={classes.div2}>
                    <Typography className={classes.header} >
                        Order Summary
                    </Typography>
                    <Typography variant="body2" component="p" >
                        4 items
                        <IconButton aria-label="delete">
                            <ExpandMoreOutlinedIcon/>
                        </IconButton>
                    </Typography>
                </div>
                <Box className={classes.container2}>
                    <div className={classes.box2}>
                        <Typography >
                            Payment
                        </Typography>
                        <div className={classes.Gtotaldiv}>
                            <Typography variant="body2" component="p">
                                Grand Total
                            </Typography>
                            <Typography variant="body2" component="p">
                                <span className={classes.rs}>&#8377;200</span>
                            </Typography>
                        </div>
                        <p className={classes.p}>you have saved <span>&#8377;200</span> on this order</p>
                        <Typography color='textSecondary' className={classes.paymentmethod}>
                            Choose Payment Method
                        </Typography>

                        <FormControl component="fieldset">
                            <RadioGroup aria-label="payment method" name="COD" value={value} onChange={hanChange}>
                                <FormControlLabel value="Cash on delivery" control={<Radio />} label="Cash on Delivery " classes={{ root: classes.textfield }} />
                                <FormControlLabel value="Razor Pay" control={<Radio />} label="Razor Pay" classes={{ root: classes.textfield }} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </Box>
                <div className={classes.btncontainer}>
                    <Divider />
                    <CardActions >
                        <Button size="small" variant="contained" className={classes.paymentbtn}>Make Payment</Button>
                    </CardActions>
                </div>
            </div>
        </>
    );
}