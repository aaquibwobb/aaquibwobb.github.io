import { Box, Typography, Avatar, Divider, Button, Paper, IconButton, Checkbox, FormControlLabel,Grid} from '@material-ui/core';
import { Stars } from '../ui/Stars';
// import { ContentRow } from './ContentRow';
import { __tr } from '../../i18n';
import { css } from '@emotion/css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ICarousel } from "./ICarousel";
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

const styles = {
  tableContainer: css`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center,
  display: flex,
    flex-basis: content,`,
  container: css`
  margin-top:10px,
  display: flex,
  flex-direction:row,
    flex-basis: content,
    text-align:center`,
  cont: css``,
  key: css``,
  value: css`
    padding:1em,
    font-weight:600`,
};

export default function RequestRivision() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar src='image9.jpg' onClick={handleClickOpen}>
      </Avatar>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <Divider />
        <DialogContent style={{
          height: "100vh",
          width: "101vw",
          margin: "0px",
          paddingInline: "0px"
        }} >
         <Influencer/>
        </DialogContent>
      </Dialog>
    </div>
  );
}




export function TemporaryDrawer() {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };
  const requestrevisiondata = (
      <Box paddingX='1em' paddingY='1em'>
    <Box>
        <Grid container>
            <Grid item xs={6}>
      <Typography>
          Request Revision
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton aria-label="close"
            style={{
            //   position: 'absolute',
            //  left: "12em",
              top: "-15px",
              color: "black",
            }} onClick={handleClose} >
            <CloseIcon />
          </IconButton>
          </Grid>
          </Grid>
        </Box>
          <Typography gutterBottom>
            Select reason for requesting revision
          </Typography>
          <Box display='flex' flexDirection='column'>
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Content delivered is poor quality"
            />
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="Content delivered is not as per brief"
            />
            <FormControlLabel
              control={<Checkbox name="jason" />}
              label="The brief has changed from my end"
            />
          </Box>
          <Box>
          <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" style={{width:'90vw',height:'25vh'}} />
          </Box>
          <Box display='flex' margin='auto'>
          <Button autoFocus variant='contained' onClick={handleClose}  color="primary">
            Request Revision
          </Button>
          </Box>
          </Box>
  );

  return (
    <div>
          <Button variant="outlined" fullWidth style={{ textTransform: 'capitalize' }} onClick={handleClickOpen()}>
        Request Revision
      </Button>
          <Drawer anchor='bottom' open={open} onClose={handleClose} style={{width:'100vw'}}>
            {requestrevisiondata}
          </Drawer>
    </div>
  );
}


export function Influencer() {
  return (
      <Box>
          <Paper>
          <Box display="flex" flexDirection='row' alignItems='center'>
            <Grid container>
              <Grid item xs={2}>
            <IconButton><ChevronLeftIcon/></IconButton>
            </Grid>
            <Grid item xs={8}>
              <Box display='flex' alignItems='center'>
            <Avatar alt="Remy Sharp" />
            <Typography>
              Lara Dennis
            </Typography>
            </Box>
            </Grid>
            <Grid item xs={2}>
            <IconButton><ChevronRightIcon/></IconButton>
            </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box paddingX={2} paddingY={2} >
          
        <Box marginBottom='1em'>
          <Box marginRight='10px' width='vw'>
            {/* <img src='image1.png' width='90vw' height='35vh' /> */}
            <ICarousel/>
          </Box>
          <div style={{ marginTop: '2em' }}>
            <TextareaAutosize aria-label="minimum height" minRows={8} cols={44} placeholder="Description or caption comes here" />
          </div>
        </Box>
        <Divider/>
        <Box marginTop='10px' display='flex'>
            <Grid container>
                <Grid item xs={6}>
          <TemporaryDrawer />
          </Grid>
          <Grid item xs={6}>
          <Button variant='contained' color='primary' fullWidth  style={{ textTransform: 'capitalize', marginLeft: '2px', width: '' }}>Approve</Button>
          </Grid>
          </Grid>
        </Box>
      </Box>
      </Paper>
     </Box> 
  );
}
