import { Box, Grid, Paper, Typography,Checkbox,FormControlLabel } from "@material-ui/core";
import { __tr } from "../../../i18n";
import { InfluencerFilter } from "../../discover/InfluencerFilter";
import { NewInfluencerList } from "../Shortlisted/newInfluencerListSort";
import { NewInvite } from "./NewInvite";


export function InviteScreen() {
    return <Box  paddingLeft='4em' paddingRight='4em'>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex" >
                 <FormControlLabel
                 control={<Checkbox/>}
                 label='select all'
                 />
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Paper>
                <NewInvite />
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper >
                <InfluencerFilter />
                </Paper>
            </Grid>
        </Grid>
    </Box>
}