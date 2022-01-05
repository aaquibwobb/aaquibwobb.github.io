import { Box, Grid, Paper, Typography,useTheme,useMediaQuery } from '@material-ui/core';
import { useState } from 'react';
import { StyledTab, StyledTabs } from '../ui/custom';
import { __tr } from '../../i18n';
import { EditPersonal } from './EditPersonal';

export function EditProfileMobileView() {
    return(
      <Box width="100vw"
      marginLeft= '-5px'
      marginTop= '-16px'
      >
        <Paper >
            <Box padding={2}>
              <EditPersonal />
            </Box>
           </Paper>
    </Box>
    );
};