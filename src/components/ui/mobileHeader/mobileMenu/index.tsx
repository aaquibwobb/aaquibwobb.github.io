import { IconButton, SwipeableDrawer, Button } from '@material-ui/core';
import { Routes } from '../../../../routes';

import campaignIcon from '../../../../assets/icons/campaign.svg';
import myOrderIcon from '../../../../assets/icons/my-order-icon.svg';
import messageIcon from '../../../../assets/icons/message.svg';
import emailIcon from '../../../../assets/icons/email.svg';
import lockIcon from '../../../../assets/icons/lock-icon.svg';
import logoutIcon from '../../../../assets/icons/logout-icon.svg';
import helpIcon from '../../../../assets/icons/help-icon.svg';
import favouriteIcon from '../../../../assets/icons/favourite.svg';
import userIcon from '../../../../assets/icons/user-icon.svg';
import { __tr } from '../../../../i18n';
import { Link, useHistory } from 'react-router-dom';
import styles from './mobileMenu.module.scss';
import { Star } from '@material-ui/icons';
import { VscChevronLeft } from 'react-icons/vsc';

interface props {
  open: boolean;
  userName: string;
  profilePic: string;
  userType: string;
  userRating: number;
  numReviews: number;
  onClose: () => void;
  onOpen: () => void;
  onLogout: () => void;
}

const MobileMenu: React.FC<props> = ({
  open,
  onClose,
  userName,
  userRating,
  userType,
  numReviews,
  profilePic,
  onOpen,
  onLogout,
}) => {
  // init
  const history = useHistory();
  return open ? (
    <SwipeableDrawer
      PaperProps={{
        style: {
          width: '70%',
        },
      }}
      onOpen={onOpen}
      open={open}
      onClose={onClose}
      transitionDuration={{ enter: 200, exit: 200 }}
    >
      <div className={styles.Container}>
        <div className={styles.TopContainer}>
          <div className={styles.UserProfile}>
            <img src={profilePic} alt={userName} />
            <div>
              <p>{userName}</p>
              <p>
                {userType}{' '}
                <span>
                  {userRating.toFixed(1)} <Star /> <span>{`(${numReviews})`} </span>
                </span>
              </p>
            </div>
            <IconButton className={styles.BackBtn} onClick={() => onClose()}>
              <VscChevronLeft />
            </IconButton>
          </div>
          <ul>
            <Button onClick={() => history.push(Routes.MyCampaigns)}>
              <img src={campaignIcon} alt='My Campaigns' style={{ transform: 'rotate(-5deg) scale(1.5)' }} />
              {__tr('myCampaigns')}
            </Button>
            <Button onClick={() => history.push(Routes.Messages)}>
              <img src={messageIcon} alt='Messages' />
              {__tr('messages')}
            </Button>
            <Button onClick={() => history.push(Routes.Notifications)}>
              <img src={favouriteIcon} alt='Notifications' />
              {__tr('notifications')}
            </Button>
            <Button onClick={() => history.push(Routes.MyProfile)}>
              <img
                src={profilePic}
                alt='My Campaigns'
                style={{
                  width: '.94em',
                  borderRadius: '50%',
                  height: '.94em',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  marginRight: '1.3em',
                }}
              />
              {__tr('viewProfile')}
            </Button>
            <Button onClick={() => history.push(Routes.MyOrders)}>
              <img src={myOrderIcon} alt='My Orders' style={{ transform: 'scale(1.6)' }} />
              {__tr('myOrders')}
            </Button>
            <Button onClick={() => history.push(Routes.Affiliate)}>
              <img src={emailIcon} alt='Refer & Earn' />
              {__tr('referAndEarn')}
            </Button>
            <Button onClick={() => history.push(Routes.UserManagement)}>
              <img src={userIcon} alt='User Management' />
              {__tr('userManagement')}
            </Button>
          </ul>
        </div>
        <div className={styles.BottomContainer}>
          <Button onClick={() => history.push(Routes.PrivacyPolicies)}>
            <img src={lockIcon} alt='Privacy Policies' />
            {__tr('privacyPolicy')}
          </Button>
          <Button onClick={() => history.push(Routes.HelpAndSupport)}>
            <img src={helpIcon} alt='My Campaigns' style={{ marginLeft: '-.2em' }} />
            {__tr('helpAndSupport')}
          </Button>
          <Button
            onClick={() => {
              onClose();
              onLogout();
            }}
          >
            <img src={logoutIcon} alt='My Campaigns' style={{ marginLeft: '.16em' }} />
            Logout
          </Button>
        </div>
      </div>
    </SwipeableDrawer>
  ) : null;
};

export default MobileMenu;
