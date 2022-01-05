import { IconButton } from '@material-ui/core';
import { ArrowDownwardSharp, KeyboardArrowDownOutlined } from '@material-ui/icons';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '../../../../../core/hooks';
import styles from './messageReceived.module.scss';

type Element = HTMLElement | undefined | null;

interface props {
  key: string;
  text: string;
  time: string;
  image?: string;
  userName?: string;
  isSelected: boolean;
  groupChat?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onClickDownArrow?: (el: HTMLDivElement | null) => void;
}

const MessageReceived: React.FC<props> = ({
  key,
  image,
  text,
  time,
  isSelected,
  onClick,
  onClickDownArrow,
  groupChat,
  userName,
}) => {
  // Screen width
  const [width] = useWindowSize();
  //
  const messageRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={messageRef}
      className={`${styles.Container}  ${isSelected ? styles.Elevate : ''}`}
      key={key}
      onClick={(e) => {
        if (width <= 900) {
          onClick(e);
        }
      }}
    >
      {image && <img src={image} alt='message' className={styles.TextImage} />}
      <p className={styles.Text}>{text}</p>
      <p className={styles.Time}>{time}</p>
      <div className={styles.topContainer}>
        <p>{groupChat && userName}</p>
        <IconButton
          className={styles.downArrowBtn}
          onClick={() => {
            onClickDownArrow && onClickDownArrow(messageRef.current);
          }}
        >
          <KeyboardArrowDownOutlined />
        </IconButton>
      </div>
    </div>
  );
};

export default MessageReceived;
