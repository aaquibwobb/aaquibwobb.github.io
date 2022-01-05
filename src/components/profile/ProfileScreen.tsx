import { Box, Divider, Grid, Paper, Typography,Hidden } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import { __tr } from '../../i18n';
import { Routes } from '../../routes';
import { EditProfile } from './EditProfile';
import { LinkedAccounts } from './LinkedAccounts';
import { ProfileHome } from './ProfileHome';
import { UserRatingStats } from './UserRatingStats';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

export function ProfileScreen() {
  return (
    <Box paddingY={2}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Switch>
            <Route path={Routes.EditProfile}>
              <EditProfile />
            </Route>
            <Route path={Routes.MyProfile} exact>
              <ProfileHome />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                  <Hidden smDown>
              <Paper elevation={0} style={{width:"max-content"}}>
                <Box paddingX={4} paddingY={2}>
                  <Box
                    height='56px'
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography variant='body1' style={{ fontWeight: 500, textTransform: 'uppercase' }}>
                      <img src="images\growthicon.png"/>{__tr('yourProgress')}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box marginTop={2}>
                    <UserRatingStats />
                  </Box>
                </Box>
              </Paper>
                    </Hidden>
            </Grid>
            <Grid item xs={12}>
                  <Hidden smDown>
              <Paper elevation={0} style={{width:"max-content"}}>
                <Box paddingX={4} paddingY={2}>
                  <Box
                    height='56px'
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography variant='body1' style={{ fontWeight: 500, textTransform: 'uppercase' }}>
                      <span><PermIdentityIcon/></span>Linked Account
                    </Typography>
                  </Box>
                  <Divider />
                  <Box marginTop={2}>
                    <LinkedAccounts />
                  </Box>
                </Box>
              </Paper>
                    </Hidden>                
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
