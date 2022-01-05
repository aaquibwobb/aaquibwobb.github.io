import { Box, Grid, Paper } from "@material-ui/core";
import { AppMetadata } from "../../ui/AppMetadata";
import { EscrowAccountBalanceCard } from "./EscrowAccountBalanceCard";
import  OrderTransactions from "./OrderTansactions";
import { OrderTransactionReceipt } from "./OrderTransactionReceipt";
import { OrderTransactionTypeFilter } from "./OrderTransactionTypeFilter";
import {isMobile} from 'react-device-detect';
import { mobileScreenStates } from '../../const';

const Orders= ({
    mobileState,
    onClickhandle
}) => {

 

    return <Grid container spacing={2}  >
        <Grid item xs={12} md={8} className=
            {isMobile && mobileState==mobileScreenStates.transaction ?'': isMobile? 'hide' : '' }>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Box padding={2}>
                                <EscrowAccountBalanceCard />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <OrderTransactions 
                                onClickhandle= {onClickhandle}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}  className={isMobile && mobileState==mobileScreenStates.payment ?'' : isMobile? 'hide' : '' }>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <OrderTransactionTypeFilter />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <OrderTransactionReceipt />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <AppMetadata />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    </Grid>
}

export default Orders;