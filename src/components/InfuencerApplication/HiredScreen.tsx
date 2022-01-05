import {
    Box,
    Grid,
    Paper,
    Checkbox,FormControlLabel,Button,
  } from '@material-ui/core';
  
  import { __tr } from '../../i18n';
  import { HiredSection } from './HiredSection';
  import { HiredCard } from './HiredCard';
  
  
  export function HiredScreen() {
    return (
      <Box  paddingLeft='4em' paddingRight='3em'>
      <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex" >
                 <FormControlLabel
                 control={<Checkbox/>}
                 label='select all'
                 />
                 <Button>Export</Button>
                </Box>
            </Grid>
        <Grid item xs={9}>
          <Paper>
            <Box >
                <HiredSection/>
             </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper >
            <Box width='100%'>
                <HiredCard/>
             </Box>
          </Paper>
         </Grid>
        </Grid>
        </Box>
       
    );
  }
  