import React from 'react';
import styles from './messageSent.module.scss';

interface props {
  key: string;
  text: string;
  time: string;
  image?: string;
}

const MessageSent: React.FC<props> = ({ key, image, text, time }) => {
  return (
    <div className={styles.Container} key={key}>
      {image && <img src={image} alt='message' className={styles.TextImage} />}
      <p className={styles.Text}>{text}</p>
      <p className={styles.Time}>{time}</p>
    </div>
  );
};

export default MessageSent;
