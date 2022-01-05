import { css } from '@emotion/css';
import React from 'react';
import { Box, Typography,Hidden ,Avatar,useTheme,useMediaQuery,
  IconButton,
  Button ,
  Dialog,
  Divider,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle } from '@material-ui/core';
import { CssVariables } from '../../css-variables';
import { __tr } from '../../i18n';
import { ArrowDropDown } from '@material-ui/icons';
import {LinkedSocialAccountMobview}  from './LinkedSocialAccountMobview';
import CloseIcon from '@material-ui/icons/Close';
import { LinkedSocialAccounts } from './LinkedSocialAccounts';
const socialStyles = {
  list: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  `,
  profile: css`
    max-width: 96px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  avatar: css`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    background:grey;
  `,
  icon:css`
  margin-top: -20px;
    margin-left: 14em;`,
};

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  
const handleClickOpen = () => () => {
    setOpen(true);
    
  };
const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        // descriptionElement.focus();
      }
    }
  }, [open]);

  const theme=useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);

  return (
    <>
    {isMatch ? (<LinkedSocialAccountMobview/>) :
(<>    
    <div >
      <Avatar ><ArrowDropDown onClick={handleClickOpen()}/></Avatar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"> 
        <Box display='flex' flexDirection='row'>
        <Typography variant='body2' style={{ fontWeight: 300, }}>
          Linked Social Account
      </Typography>
      <IconButton onClick={handleClose} aria-label="delete"   >
         <CloseIcon className={socialStyles.icon} />
     </IconButton>
       </Box> 
      </DialogTitle>
      <Divider/>
        <DialogContent >
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <LinkedSocialAccounts/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    </>)}
        </>
  );
}

function SocialAvatar() {
  return (
    <div className={socialStyles.profile}>
      <div className={socialStyles.avatar}></div>
    </div>
  );
}

export function LinkedAccounts() {
  return (
    <Box>
      <Typography variant='body2' style={{ fontWeight: 300, color: CssVariables.colorGrayV2 }}>
        {__tr('linkedSocialMediaAccounts')}
      </Typography>
      <Box className={socialStyles.list}>
        <SocialAvatar />
        <SocialAvatar />
        <SocialAvatar />
        <ScrollDialog/>
      </Box>
    </Box>
  );
}
