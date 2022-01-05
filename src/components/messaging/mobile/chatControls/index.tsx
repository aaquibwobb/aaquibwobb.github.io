import { useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Popover } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { BsEmojiSmile } from 'react-icons/bs';
import styles from './chatControls.module.scss';
import { Box } from '@mui/system';
import { group } from 'console';
import zIndex from '@material-ui/core/styles/zIndex';

interface Props {
  groupChat?: boolean;
}

const ChatControls: React.FC<Props> = ({ groupChat }) => {
  const [message, setMessage] = useState<string>('');

  const [openSendOptions, setOpenSendOptions] = useState<boolean>(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | undefined>(undefined);

  //open options modal
  const openOptionsModal = (el: HTMLElement) => {
    setMenuAnchorEl(el);
    setOpenSendOptions(true);
  };

  return (
    <>
      <div className={styles.chatControlsMobile}>
        <div className={styles.inputMessage}>
          <div className={styles.emojiIcon}>
            <IconButton size='small'>
              <BsEmojiSmile />
            </IconButton>
          </div>
          <textarea
            value={message}
            placeholder='write a message'
            rows={1}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className={styles.attachFile}>
            <IconButton size='small'>
              <AttachFile />
            </IconButton>
          </div>
        </div>
        <Button
          onClick={(e) => {
            if (groupChat) {
              openOptionsModal(e.currentTarget);
            } else {
              console.log('message send btn');
            }
          }}
          className={styles.sendBtn}
        >
          Send
        </Button>
      </div>
      {/* For web view */}
      <div className={styles.chatControls}>
        <div className={styles.topContainer}>
          <textarea
            value={message}
            placeholder='write a message'
            rows={1}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftWrapper}>
            <div className={styles.emojiIcon}>
              <IconButton size='small'>
                <BsEmojiSmile />
              </IconButton>
            </div>
            <div className={styles.attachFile}>
              <IconButton size='small'>
                <AttachFile />
              </IconButton>
            </div>
          </div>
          <Button
            className={styles.sendBtn}
            onClick={(e) => {
              if (groupChat) {
                openOptionsModal(e.currentTarget);
              } else {
                console.log('message send btn');
              }
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <Popover
        PaperProps={{
          style: {
            // width: 185,
            marginTop: '-.6em',
          },
        }}
        open={openSendOptions}
        onClose={() => {
          setMenuAnchorEl(undefined);
          setOpenSendOptions(false);
        }}
        anchorEl={menuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        elevation={2}
      >
        <Box minWidth='150px'>
          <MenuItem key='1'>Send to all</MenuItem>
          <MenuItem key='2'>Sent to selected</MenuItem>
        </Box>
      </Popover>
    </>
  );
};

export default ChatControls;
