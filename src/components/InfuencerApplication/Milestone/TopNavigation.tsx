import { Box, Tab, Tabs, Typography,Paper,Grid,IconButton,Fab,useTheme,useMediaQuery} from '@material-ui/core';
import { useState } from 'react';
import { __tr } from '../../../i18n';
import styles from '../../../styles/ProfileDrawer.module.scss';
import style from '../../../styles/influencer.module.scss';
// import style from '../messaging/mobile/messagesList/messagesList.module.scss';
import {HiredScreen} from "./MilestoneHiredScreen";
import { ReceivedScreen } from './MilestoneReceivedScreen';
import { ShortListedScreen } from './MilestoneShortlistedScreen';
import { RejectedScreen } from '../Rejected/RejectedScreen';
import { InviteScreen } from '../Invite/InviteScreen';
import { css } from '@emotion/css';
import {MobileView} from './MilestoneMobileView';

export function TopNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();

  //open options modal
  const openOptionsModal = (el: HTMLElement) => {
    setMenuAnchorEl(el);
    setOpenOptions(true);
  };
  const theme=useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);
  

  return (
    <>
    {isMatch ? (<MobileView/>) :
(<>    
    <Box className={styles.page} style={{background:'#f5f5f5'}}>
      <Box className={styles.tabsWrapper}>
        <Tabs
         style={{  borderBottom: '1px solid #e8e8e8',width:'65%',marginLeft:'5em',marginBottom:"",textTransform:'capitalize'}}
          aria-label='Profile tabs'
          value={activeTab}
          className={styles.tabs}
          textColor='primary'
          indicatorColor='primary'
          variant='fullWidth'
          onChange={(ev, tab) => setActiveTab(tab)}
        >
          <Tab label={<div className={style.tabtext}>Received<span className={style.key}> 122</span></div>} />
          <Tab label={<div className={style.tabtext}>Shortlisted<span className={style.key}>122</span></div>}/>
          <Tab label={<div className={style.tabtext}>Hired<span className={style.key}>122</span></div>} />
          <Tab label={<div className={style.tabtext}>Rejected<span className={style.key}>122</span></div>}/>
          <Tab label={<div className={style.tabtext}>invite<span className={style.key}>122</span></div>} />
        </Tabs>
      </Box>
      {activeTab === 0 && (
       <div className={styles.tabPanel}>
          <ReceivedScreen/>
         </div>
      )}
      {activeTab === 1 && (
       <div className={styles.tabPanel}>
          <ShortListedScreen/>
         </div>
      )}
      {activeTab === 2 && (
       <div className={styles.tabPanel}>
          <HiredScreen/>
         </div>
      )}
      {activeTab === 3 && (
       <div className={styles.tabPanel}>
          <RejectedScreen/>
         </div>
      )}
      {activeTab === 4 && (
       <div className={styles.tabPanel}>
          <InviteScreen/>
         </div>
      )}
    </Box>
    </>)}
        </>
  );
}
