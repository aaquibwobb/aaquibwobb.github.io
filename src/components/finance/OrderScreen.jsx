import { Box, Grid, Paper } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap'
import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useUrlQuery } from '../../core/hooks';
import { StyledTab, StyledTabs } from '../ui/custom';
import { __tr } from '../../i18n';
import { Routes } from '../../routes';
import '../../styles/order.css'
import { OrderBillingAddress } from './orders/OrderBillingAddress';
import  Orders  from './orders/Orders';
import { Divider } from '@material-ui/core';
import {isMobile} from 'react-device-detect';
import { useState } from 'react';
import { mobileScreenStates } from '../const';

export function OrderScreen() {
  var selectedTab = useUrlQuery('tab', 'orders');
  const history = useHistory();
  const [mobileScreen, setMobileScreenState] = useState(mobileScreenStates.transaction)




  const setActiveTab = useCallback(
    (tab) => {
      history.push(`${Routes.MyOrders}?tab=${tab}`);
    },
    [history]
  );

  useEffect(()=>{
    setMobileScreenState(mobileScreenStates.transaction)
  },[])


  const handleStateChange = () => {
    
    setMobileScreenState(mobileScreenStates.payment)
  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={isMobile? '':'hide'}>
      <Paper elevation={1} className="mobileViewBillingButton" 
            onClick={
              e=>{
                setMobileScreenState(mobileScreenStates.billing)
                selectedTab="billing"
              }}>
          <i className = "fa fa-file-text icon" aria-hidden="true"></i>
          <label>{__tr('billingAddress')}</label>
        </Paper>
      </Grid>
      <Divider/>
      <Grid item xs={12} md={2} className={isMobile? 'hide':''}> 
        <Paper elevation={0}>
          <Box paddingY={2}>
            <StyledTabs
              indicatorColor='primary'
              textColor='primary'
              value={selectedTab}
              variant='fullWidth'
              orientation='vertical'
              onChange={(ev, val) => setActiveTab(val)}
            >
              <StyledTab label={__tr('myOrders')} value='orders' />
              <StyledTab label={__tr('billingAddress')} value='billing' />
            </StyledTabs>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={10} > 
        { selectedTab === 'orders' && 
          <Orders 
            mobileState = {mobileScreen}
            onClickhandle={handleStateChange}
            /> }
        { selectedTab === 'billing' &&
         <OrderBillingAddress 
            mobileState = {mobileScreen}
            /> }
      </Grid>
    </Grid>
  );
}
