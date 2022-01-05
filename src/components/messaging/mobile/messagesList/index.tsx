import React, { useState } from 'react';
import styles from './messagesList.module.scss';
import { Box, IconButton, List, MenuItem, Popover } from '@material-ui/core';
import { MessageCard } from '../../MessageCard';
import MobileHeader from '../../../ui/mobileHeader';
import { RiSearchLine } from 'react-icons/ri';
import { MoreVert } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

// TODO: taking props  - array of messages (Message type definition)
interface Props {
  onCreateGroupClick: () => void;
}

const MessagesList: React.FC<Props> = ({ onCreateGroupClick }) => {
  // state
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();
  // Array ofnum to loop over and get multiples message thread -delete later
  const threadsCount: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //open options modal
  const openOptionsModal = (el: HTMLElement) => {
    setMenuAnchorEl(el);
    setOpenOptions(true);
  };
  return (
    <Box className={styles.Container}>
      <Box className={styles.mobileHeaderContainer}>
        <MobileHeader pageTitle='Messages'>
          <div className={styles.HeaderChildren}>
            <IconButton key='1'>
              <RiSearchLine size={25} />
            </IconButton>
            <IconButton
              key='2'
              onClick={(ev: React.MouseEvent<HTMLElement>) => {
                openOptionsModal(ev.currentTarget);
              }}
            >
              <MoreVert fontSize='medium' />
            </IconButton>
          </div>
        </MobileHeader>
      </Box>
      <Box className={styles.List}>
        <List>
          {threadsCount.map((v, i) => (
            <Link to='/app/chat?thread=thread'>
              <MessageCard
                id={nanoid()}
                profilePic={
                  'https://s3-alpha-sig.figma.com/img/c5dc/d1d1/3cddff1f356a74503a8b889871f3e425?Expires=1639353600&Signature=FtDW-CbC~5NM-NgYfU13Y~0Cz5aLXtpLXBym4bh8GzgY6yrwxrUg~Csxm4RNhW9WHAD0zHN0kWipxNRcKdty1tAF1YSLYrUpQF2ziPxTwsp6rClcmHkfKojSRGXcsxy1PrX6O846gkKCHgTuDMt8cRtDTJBeaHgcDRCNZJ4oc7yfZsDek1rtlqdpPRrGFV6i7y02lUC9LcllS-jYXv1-lahD9ooWZOvipXsUARjB~~wtW~r8lkXZ1vrVn-61ZtjoRl5vGLoQqLunXVz6mUS2xGNp5SpwmsQizstCmmyf3ezMxvNMJJP1YPe6pVZbHu1NIdYbQ19murkiHaCIhx8fig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
                userName={'Jonas William'}
                message={'Are you interested to join us then, from monday?'}
                time={'4:40 PM'}
              />
            </Link>
          ))}
        </List>
      </Box>
      <Popover
        open={openOptions}
        onClose={() => {
          setOpenOptions(false);
          setMenuAnchorEl(undefined);
        }}
        anchorEl={menuAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        elevation={2}
      >
        <Box minWidth='150px'>
          <MenuItem key='1'>New Chat</MenuItem>
          <MenuItem key='2' onClick={onCreateGroupClick}>
            New Group
          </MenuItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default MessagesList;
