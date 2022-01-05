import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Hidden
} from '@material-ui/core';
import { CssVariables } from '../../../css-variables';
import { __tr } from '../../../i18n';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconFilter } from '../../ui/Icons';


export function TransactionHistory(){
  return(
<Box padding={2}display='flex' flexDirection='row'>
        <Box display='flex'>
        <Typography variant='h6' style={{ textTransform: 'capitalize' }}>
         Transaction History
        </Typography>
        </Box>
        <Box component="span" className=""  marginLeft='86px'
    marginTop='6px'>
            <IconFilter size={24} />
        </Box>
      </Box>
  );
}

export function OrderTransactions() {
  return (
    <Box>
      <Hidden smDown>
      <Box padding={2}>
        <Typography variant='h6' style={{ textTransform: 'uppercase' }}>
          {__tr('transactionList')}
        </Typography>
      </Box>
      </Hidden>
      <Hidden smUp>
        <TransactionHistory/>
      </Hidden>
      <Divider />
      <Box>
        <List disablePadding>
          <ListItem button>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary='Ready to stich with Biba'
              primaryTypographyProps={{
                variant: 'body1',
                style: {
                  fontWeight: 400,
                  fontSize:"1em"
                },
              }}
              secondary='Cash earned'
            />
            <ListItemSecondaryAction>
              <Typography variant='body1' style={{ fontWeight: 600 }}>
                + ₹3,000
              </Typography>
              <Typography variant='body2' style={{ color: CssVariables.colorGrayV2 }}>
                16 July 2021
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary='Ready to stich with Biba'
              primaryTypographyProps={{
                variant: 'body1',
                style: {
                  fontWeight: 400,
                  fontSize:"1em"
                },
              }}
              secondary='Cash earned'
            />
            <ListItemSecondaryAction>
              <Typography variant='body1' style={{ fontWeight: 600 }}>
                + ₹3,000
              </Typography>
              <Typography variant='body2' style={{ color: CssVariables.colorGrayV2 }}>
                16 July 2021
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
