import { Box, Tab, Tabs, Typography,Paper,Grid,IconButton } from '@material-ui/core';
import { useState } from 'react';
import { TextTransformNoneButton } from '../ui/TextTransformNoneButton';
import { UnmodifiableProgress } from '../ui/UnmodifiableProgress';
import { __tr } from '../../i18n';
import styles from '../../styles/ProfileDrawer.module.scss';
import { CampaignReview } from '../campaigns/CampaignReview';
import { AboutUser } from './AboutUser';
import { UserRatingStats } from './UserRatingStats';
import { ContentRow } from './ContentRow';
import { UserBio } from './UserBio';
import { LinkedAccounts } from './LinkedAccounts';
import MobileHeader from '../ui/mobileHeader';
import { RiSearchLine } from 'react-icons/ri';
import { MoreVert } from '@material-ui/icons';
import style from '../messaging/mobile/messagesList/messagesList.module.scss';

export function ProfileDrawer() {
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
      <Paper style={{width: '99vw', marginTop:'55px',marginLeft: '-6px'}}>
       <Box className={style.mobileHeaderContainer}>
        <MobileHeader pageTitle='My Profile'>
          <div className={style.HeaderChildren}>
            <IconButton key='1'>
              <RiSearchLine size={25} />
            </IconButton>
          </div>
        </MobileHeader>
        </Box>
      <Box paddingY={2} width='100%'>
        <UserBio  /> 
      </Box>
      <Box className={styles.actions}>
        <TextTransformNoneButton variant='outlined' color='primary' style={{width:'100%'}}>
          {__tr('message')}
        </TextTransformNoneButton>
      </Box>
      <Box>
        <LinkedAccounts/>
      </Box>
      <Box className={styles.tabsWrapper}>
        <Tabs
          aria-label='Profile tabs'
          value={activeTab}
          className={styles.tabs}
          textColor='primary'
          indicatorColor='primary'
          variant='fullWidth'
          onChange={(ev, tab) => setActiveTab(tab)}
        >
          <Tab label={__tr('about')} />
          <Tab label={__tr('campaignsReviews')} />
        </Tabs>
      </Box>
      {activeTab === 0 && (
        <Box className={styles.tabPanel}>
          <Box marginY={2} className={styles.tableContainer}>
            <ContentRow>
              <Typography variant='body2' className={styles.key}>
                {__tr('inboxResponseRate')}
              </Typography>
              <div className={styles.cellProgress}>
                <div className={styles.progress}>
                  <UnmodifiableProgress height={8} progress={65} />
                </div>
                <span className={styles.percent}>65%</span>
              </div>
            </ContentRow>
            <ContentRow>
              <Typography variant='body2' className={styles.key}>
                {__tr('firstResponseTime')}
              </Typography>
              <Typography variant='body2' className={styles.hour}>
                2h 20min
              </Typography>
            </ContentRow>
            <ContentRow>
              <Typography variant='body2' className={styles.key}>
                {__tr('lastDelivery')}
              </Typography>
              <Typography variant='body2' className={styles.hour}>
                2h 30min
              </Typography>
            </ContentRow>
          </Box>
          <AboutUser />
        </Box>
      )}
      {activeTab === 1 && (
        <Box className={styles.tabPanel}>
          <UserRatingStats />
          <Box marginY={2}>
            <Box paddingY={2}>
              <Typography variant='h6'>{__tr('campaignReview')}</Typography>
            </Box>
            <Box>
              <CampaignReview />
              <CampaignReview />
            </Box>
          </Box>
        </Box>
      )}
      </Paper>
    </Box>
  );
}
