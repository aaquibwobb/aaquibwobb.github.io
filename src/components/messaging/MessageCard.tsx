import { FiberManualRecord } from '@material-ui/icons';
import { MdDone } from 'react-icons/md';
import styles from '../../styles/MessageCard.module.scss';

interface Props {
  id: string | number;
  profilePic: string;
  userName: string;
  message: string;
  time?: string;
  isOnline?: boolean;
  numUnreadMessages?: number;
  selected?: boolean;
  onClick?: () => void;
}

export const MessageCard: React.FC<Props> = ({
  profilePic,
  id,
  userName,
  message,
  time,
  isOnline,
  numUnreadMessages,
  selected,
  onClick,
}) => {
  return (
    <li className={`${styles.container} ${selected && styles.selected}`} key={id} onClick={onClick}>
      <div className={styles.avatar}>
        <img src={profilePic} alt={userName} />
        {selected && <MdDone className={styles.selectedIcon} />}
        {isOnline && <FiberManualRecord className={styles.onlineIcon} />}
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.head}>
          <span className={styles.title}>{userName}</span>
          {time && (
            <span className={numUnreadMessages ? styles.timeBold : styles.time} style={{}}>
              {time}
            </span>
          )}
        </div>
        <div className={styles.body}>
          <span className={`${styles.message} ${numUnreadMessages && styles.boldText}`}>
            {message.length > 28 ? `${message.substring(0, 28)}...` : message}
          </span>
          {numUnreadMessages && (
            <div className={styles.badgeWrapper}>
              <span className={styles.badge}>{numUnreadMessages}</span>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
