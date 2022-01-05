import { Box, Grid, Paper,IconButton } from "@material-ui/core";
import { EscrowAccountBalanceCard } from "./EscrowAccountBalanceCard";
import { OrderTransactions } from "./OrderTansactions";
import { useState } from "react";
import MobileHeader from '../../ui/mobileHeader';
import { RiSearchLine } from 'react-icons/ri';
import styles from '../../messaging/mobile/messagesList/messagesList.module.scss';


export function OrdersMobileView() {

    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();
  
    //open options modal
    const openOptionsModal = (el: HTMLElement) => {
      setMenuAnchorEl(el);
      setOpenOptions(true);
    };
 return(
    <Box marginTop='72px'>
    <Grid container spacing={2}>
        <Grid xs={12}>
    <Box className={styles.mobileHeaderContainer}>
        <MobileHeader pageTitle='My Orders'>
          <div className={styles.HeaderChildren}>
            <IconButton key='1'>
              <RiSearchLine size={25} />
            </IconButton>
          </div>
        </MobileHeader>
          </Box>
          </Grid>
        <Grid item xs={12}>
            <Paper elevation={0}>
                <Box padding={2}>
                    <EscrowAccountBalanceCard />
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={12}>
            <Paper elevation={0}>
                <OrderTransactions />
            </Paper>
        </Grid>
    </Grid>
</Box>
 );
}