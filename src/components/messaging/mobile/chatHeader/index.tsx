import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './chatHeader.module.scss';
import backIcon from '../../../../assets/icons/left-arrow.svg';
import { useWindowSize } from '../../../../core/hooks';

interface props {
  fullName: string;
  profilePic: string;
}

const ChatHeader: React.FC<props> = ({ fullName, profilePic }) => {
  // screen width

  return (
    <div className={styles.chatHeader}>
      <div className={styles.leftContainer}>
        <Link to='/app/chat'>
          <IconButton size='small' className={styles.BackIcon}>
            {/* <MdKeyboardBackspace size='28px' /> */}
            <img src={backIcon} alt='Go back' />
          </IconButton>
        </Link>

        <Link to='/app/chat?about=about' className={styles.Profile}>
          <img src={profilePic} alt='profile-pic' />
          <p>{fullName}</p>
        </Link>
      </div>
    </div>
  );
};

export default ChatHeader;
