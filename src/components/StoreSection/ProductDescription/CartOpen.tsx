import React from 'react';
import { Button, IconButton, Badge, makeStyles, } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CartPage from "../MyCart/CartPage";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  cart: {
    marginLeft: "3em",
  },
  crtpg: {
    marginLeft: "61em",
    marginTop: "-39px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "8%",
    },
  },
  btn: {
    borderRadius: "0px",
    marginTop: "125px",
    textTransform: "capitalize",
    marginLeft: "-8px",
    marginRight: "-8px",
    marginBottom: "-8px",
    height: "4em",
    width: "-webkit-fill-available",
  },
  cartitem: {
    marginLeft: "12px",
    backgroundColor: "#0b0bcb",
    borderRadius: "25px",
    width: "2.5vw",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "10vw",
    },
  }
}));


export default function CartOpen() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState();

  const handleClickOpen = (scrollType:any) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        //  descriptionElement.focus();
      }
    }
  }, [open]);
  const classes = useStyles();
  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen('body')} className={classes.cart}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <Dialog
        className={classes.crtpg}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Button
            onClick={handleClose}
            startIcon={<ArrowBackIosIcon />}
          >
            My Cart
            <span className={classes.cartitem}>3</span>
          </Button>
        </DialogTitle>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <CartPage/>
        </DialogContentText>
        <DialogActions>
          <Button className={classes.btn} variant="contained" color="primary" fullWidth >
            Proceed to Payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


