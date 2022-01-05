import {
  Box,
  Divider,
  IconButton,
  Avatar,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Container,
  Grid
} from '@material-ui/core';
import { __tr } from '../../i18n';
import { css } from '@emotion/css';
import styles from '../../styles/UserResumeCard.module.scss';
import React from 'react';
import { useState } from "react";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import influencerdata from "../../core/api/influencerdata.json";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InfluencerCard from './InfluencerCard';
import RequestRivision from './Influencer';

const options = [
  'Select All',
  'Export Influencer'
];

const ITEM_HEIGHT = 8;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}



export function LinkedSocialAccountMobview() {
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
            <IconButton onClick={handleClose} aria-label="Back Arrow" style={{ paddingTop: 0, marginLeft: '-27px' }}>
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography variant='body2' style={{ fontWeight: 300, }}>
              Linked Social Account
            </Typography>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent style={{
          height: "100vh",
          width: "101vw",
          margin: "0px",
          paddingInline: "0px"
        }} >
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* <LinkedSocialAccountMobileview/> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function HiredSectionMobileview() {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <Box>
      {/* <Box display='flex'>
        <Grid container>
          <Grid xs={6}>
            <KeyboardBackspaceIcon />
          </Grid>
          <Grid xs={6}>
            <InfluencerCard />
          </Grid>
        </Grid> */}
      {/* </Box> */}
      {influencerdata.map((item, index) => {
        return (
          <>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='' padding='10px'>
              <Grid container>
                <Grid xs={6}>
                  <Box display='flex' flexDirection='row'>
                    {/* <Avatar src='image9.jpg' onClick={() => setIsCreating(true)}> */}
                     <RequestRivision/> 
                     {/* </Avatar> */}
                    <Box>
                      <span style={{ marginTop: '9px', fontSize: '12px', marginLeft: '10px' }}>{item.influencerName}</span>
                      <Typography variant='body2' component='p' color="textSecondary" style={{ fontSize: '10px', marginLeft: '10px' }}>
                        {item.status}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box marginLeft='4em'>
                    <Rating
                      name="customized-empty"
                      size='small'
                      defaultValue={item.rating}
                      //  {c.diable}
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="small" />}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </>
        );
      }
      )}
    </Box >
  );
}