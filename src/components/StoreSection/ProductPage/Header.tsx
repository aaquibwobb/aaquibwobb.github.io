import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, InputBase } from '@material-ui/core';
import CartOpen from "../ProductDescription/CartOpen";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "9vh"
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '25%',
    height: "5vh",
    marginLeft: theme.spacing(16),
    borderRadius: "2px",
    border: "2px solid #FAFAFA",
    backgroundColor: " #FAFAFA",
    [theme.breakpoints.down("md")]: {
      width: '40vw',
      marginLeft: theme.spacing(2),
    },
  },
  inputInput: {
    width: "30vw",
    left: "-8px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  logo: {
    height: "2vh",
    width: "3vw",
    marginLeft:"18px",
    [theme.breakpoints.down("md")]: {
      width: "18vw",
      height: "3vh",
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <img className={classes.logo} src="wobblogo.png" />
        <div className={classes.search}>
          <div className={classes.iconButton}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={classes.input}
            classes={{
              input: classes.inputInput,
            }}
          />
        </div>
        <CartOpen />
      </div>
    </>
  );
}
export default Header;