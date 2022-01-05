import { Box, Tab, Tabs, Typography,Paper,Grid,IconButton,Fab } from '@material-ui/core';
import { useState } from 'react';
import { __tr } from '../../i18n';
import styles from '../../styles/ProfileDrawer.module.scss';
import {MobileInvite} from './Invite/MobileInvite';
import { MobileRecivedSection } from './Received/MobileRecivedSection';
import { MobileReject } from './Rejected/MobileReject';
import { MobileNewInfluencerListSort } from './Shortlisted/MobileNewInfluencerListSort';
import { HiredSectionMobileview } from './HiredSectionMobileView';
import InfluencerCard from './InfluencerCard';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import style from '../../styles/influencer.module.scss';



export function MobileView() {
  const [activeTab, setActiveTab] = useState(0);

  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();

  //open options modal
  const openOptionsModal = (el: HTMLElement) => {
    setMenuAnchorEl(el);
    setOpenOptions(true);
  };
  
return (
    <Box className={styles.page}>
       <Box display='flex'>
        <Grid container>
          <Grid xs={6}>
            <Box marginTop='10px' marginLeft='8px'>
            <KeyboardBackspaceIcon />
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box>
            <InfluencerCard />
            </Box>
          </Grid>
        </Grid>
        </Box>
      <Box className={styles.tabsWrapper}>
        <Tabs
         style={{  borderBottom: '1px solid #e8e8e8',width:'',marginInline:''}}
          aria-label='Profile tabs'
          value={activeTab}
          className={styles.tabs}
          textColor='primary'
          indicatorColor='primary'
          variant="scrollable"
          scrollButtons="auto"
        //  variant='fullWidth'
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
          <MobileRecivedSection/>
         </div>
      )}
      {activeTab === 1 && (
       <div className={styles.tabPanel}>
          <MobileNewInfluencerListSort/>
         </div>
      )}
      {activeTab === 2 && (
       <div className={styles.tabPanel}>
          <HiredSectionMobileview/>
         </div>
      )}
      {activeTab === 3 && (
       <div className={styles.tabPanel}>
          <MobileReject/>
         </div>
      )}
            {activeTab === 4 && (
       <div className={styles.tabPanel}>
          <MobileInvite/>
         </div>
      )}
    </Box>
  );
}
