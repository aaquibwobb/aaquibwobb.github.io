import {
  Box,
  Divider,
  IconButton,
  Avatar,
  Button,
  Paper,
  Dialog,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle,
  Typography,
  Container
} from '@material-ui/core';
import { __tr } from '../../i18n';
import { css } from '@emotion/css';
import styles from '../../styles/UserResumeCard.module.scss';
import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const Styles = {
    cont:css`
    border:2px solid blue,
    display: flex,
     flex-direction: row,
     /* justify-content: center; */
     align-items: center`,
    resumes:css`
    display: flex,
     flex-direction: row,
     align-items: center,
     justify-items: center,
     margin-top:-10px`,
     dialogPaper:css`
     margin:0px,`
 

};
const Data = [
  {
    key: 1,
    name: "Lara Dennies",
    followers: '20k',
    average: '90%',
  },
  {
    key: 1,
    name: "Lara Dennies",
    followers: '20k',
    average: '80%',
  },
  {
    key: 1,
    name: "Lara Dennies",
    followers: '20k',
    average: '80%',
  },
]

export  function  LinkedSocialAccountMobview() {
  const [open, setOpen] = React.useState(false);
  
const handleClickOpen = () => () => {
    setOpen(true);
    
  };
const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

return (
    <div>
      <Button color="primary" onClick={handleClickOpen()}>View all</Button>
      <Dialog
     
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="scroll-dialog-title"> 
        <Box display='flex' flexDirection='row' marginTop='12px'>
      <IconButton onClick={handleClose} aria-label="Back Arrow" style={{ paddingTop:0,marginLeft:'-27px' }}>
              <KeyboardBackspaceIcon />
      </IconButton>
        <Typography variant='body2' style={{ fontWeight: 300, }}>
          Linked Social Account
      </Typography>
       </Box> 
      </DialogTitle>
      <Divider/>
        <DialogContent  style={{height: "100vh",
       width: "101vw",
       margin: "0px",
       paddingInline: "0px"}} >
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          <LinkedSocialAccountMobileview/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function LinkedSocialAccountMobileview() {
  return (
    <Box>
      {Data.map((item, index) => {
        return (
          <>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='' padding='10px'>
              <Box display='flex' flexDirection='row'>
                <Avatar></Avatar>
                <span style={{ marginTop: '9px',fontSize:'11px',marginLeft:'10px' }}>LifeStyledew</span>
              </Box>
              <Box display='flex' flexDirection='row' marginLeft={2}>
                <Box className={styles.resume}>
                  <span className={styles.title}>20K</span>
                  <span className={styles.subtitle}>followers</span>
                </Box>
                <Box className={styles.resume}>
                  <span className={styles.title}>90%</span>
                  <span className={styles.subtitle}>averageEngagement</span>
                </Box>
              </Box>
            </Box>
            <Divider />
        </>
  );
}
        )}
     </Box >
  
    );
  }