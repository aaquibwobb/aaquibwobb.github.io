import { Box, Typography, Avatar, Divider, Button, Paper, IconButton, Checkbox, FormControlLabel,Grid} from '@material-ui/core';
import { __tr } from '../../i18n';
import { css } from '@emotion/css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ICarousel } from "./ICarousel";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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



const useStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: "2rem",
  },
  closeButton: {
    position: 'absolute',
    right: "1rem",
    top: "1rem",
    color: "grey",
  },
}));


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function RequestRevision() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle;
  return (
    <div>
      <Button variant="outlined" style={{ textTransform: 'capitalize' }} onClick={handleClickOpen}>
        Request Revision
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle>
          Request Revision
          <IconButton aria-label="close"
            style={{
              position: 'absolute',
              right: "1rem",
              top: "1rem",
              color: "grey",
            }} onClick={handleClose} >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
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
          <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" style={{width:'40vw',height:'25vh'}} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box display='flex' margin='auto'>
          <Button autoFocus variant='contained' onClick={handleClose} color="primary">
            Request Revision
          </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}



export function HiredCard() {
  return (
      <Box>
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
          <Box>
            <Typography color="textSecondary" variant="body2" style={{ padding: "5px 0px" }}>
              MileStone title
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ padding: "5px 0px" }}>
              Due date:4 july 2021
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ padding: "5px 0px" }}>
              Amount 20%
            </Typography>
          </Box>
        <Box>
          <Box marginRight='20px' width='25vw'>
            <img src='image1.png' width='80%' />
          </Box>
          <div style={{ marginTop: '10px' }}>
            <Typography variant='body2' color='textSecondary'>
              Description
            </Typography>
            <TextareaAutosize aria-label="minimum height" minRows={6} cols={35} placeholder="Description or caption comes here" />
          </div>
        </Box>
        <Box marginTop='10px' display='flex'>
          {/* <Button variant='outlined' style={{textTransform:'capitalize'}}>Request Revision</Button> */}
          <RequestRevision />
          <Button variant='contained' color='primary' style={{ textTransform: 'capitalize', marginLeft: '2px', width: '' }}>Approve</Button>
        </Box>
      </Box>
     </Box> 
  );
}
