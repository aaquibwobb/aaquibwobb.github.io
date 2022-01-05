import { Box, IconButton, InputBase, List, MenuItem, Popover, Typography } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';
import { IconEdit } from '../ui/Icons';
import styles from '../../styles/ThreadsView.module.scss';
import { ChatArea } from './ChatArea';
import { MessageCard } from './MessageCard';
import { useWindowSize } from '../../core/hooks';
import { useUrlQuery } from '../../core/hooks';
import MessagesList from './mobile/messagesList';
import { MoreVert } from '@material-ui/icons';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useHistory, useLocation } from 'react-router';
import NewGroupCreate from './newGroupCreate';

export function ThreadsView() {
  // initialize
  const history = useHistory();
  const location = useLocation();
  // state
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();
  const [isGroupChatCreate, setIsGroupChatCreate] = useState<boolean>(false);

  // returns screen width
  const [width] = useWindowSize();

  // Array ofnum to loop over and get multiples message thread -delete later
  const threadsCount: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // url query
  const chatThread = useUrlQuery('thread', '');
  const chatAbout = useUrlQuery('about', '');

  //open options modal
  const handleOptionsModalOpen = (el: HTMLElement) => {
    setMenuAnchorEl(el);
    setOpenOptions(true);
  };

  //open options modal
  const handleOptionsModalClose = () => {
    setMenuAnchorEl(undefined);
    setOpenOptions(false);
  };

  // // set url serach params group=true
  // const handleNewGroupCreate = () => {
  //   handleOptionsModalClose();
  //   urlParams.append('group', 'true');
  //   history.push({
  //     search: urlParams.toString(),
  //   });
  // };
  // // set url serach params group=true
  // const handleNewGroupCreateClose = () => {
  //   if (urlParams.has('group')) {
  //     urlParams.delete('group');
  //     history.push({
  //       search: urlParams.toString(),
  //     });
  //   }
  // };
  // set url serach params group=true
  const handleNewGroupCreate = () => {
    handleOptionsModalClose();
    setIsGroupChatCreate(true);
  };
  // set url serach params group=true
  const handleNewGroupCreateClose = () => {
    setIsGroupChatCreate(false);
  };

  return width >= 900 ? (
    <Box className={styles.page}>
      {!isGroupChatCreate ? (
        <Box className={styles.threadlist}>
          <Box className={styles.header}>
            <Typography className={styles.title}>Messaging</Typography>
            <Box className={styles.actions}>
              <IconButton size='small'>
                <IconEdit size={16} />
              </IconButton>
              <IconButton
                onClick={(ev: React.MouseEvent<HTMLElement>) => {
                  handleOptionsModalOpen(ev.currentTarget);
                }}
              >
                <MoreVert fontSize='medium' />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <InputBase
              className={styles.searchbar}
              placeholder='Search Messages, Influencers...'
              startAdornment={<MdSearch size={24} color='#848484' />}
            />
          </Box>
          <Box className={styles.body}>
            <List>
              {threadsCount.map((v, i) => (
                <MessageCard
                  id={nanoid()}
                  profilePic={
                    'https://s3-alpha-sig.figma.com/img/c5dc/d1d1/3cddff1f356a74503a8b889871f3e425?Expires=1639353600&Signature=FtDW-CbC~5NM-NgYfU13Y~0Cz5aLXtpLXBym4bh8GzgY6yrwxrUg~Csxm4RNhW9WHAD0zHN0kWipxNRcKdty1tAF1YSLYrUpQF2ziPxTwsp6rClcmHkfKojSRGXcsxy1PrX6O846gkKCHgTuDMt8cRtDTJBeaHgcDRCNZJ4oc7yfZsDek1rtlqdpPRrGFV6i7y02lUC9LcllS-jYXv1-lahD9ooWZOvipXsUARjB~~wtW~r8lkXZ1vrVn-61ZtjoRl5vGLoQqLunXVz6mUS2xGNp5SpwmsQizstCmmyf3ezMxvNMJJP1YPe6pVZbHu1NIdYbQ19murkiHaCIhx8fig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  }
                  userName={'Jonas William'}
                  message={'Are you interested to join us then, from monday?'}
                  time={'4:40 PM'}
                  // numUnreadMessages={4}
                />
              ))}
            </List>
          </Box>
          <Popover
            open={openOptions}
            onClose={handleOptionsModalClose}
            anchorEl={menuAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            elevation={2}
          >
            <Box minWidth='150px'>
              <MenuItem>New Chat</MenuItem>
              <MenuItem onClick={handleNewGroupCreate}>New Group</MenuItem>
            </Box>
          </Popover>
        </Box>
      ) : (
        // Group chat UI
        <Box className={styles.threadlist}>
          <NewGroupCreate onClose={handleNewGroupCreateClose} />
        </Box>
      )}
      <Box className={styles.threadcontent}>
        <ChatArea />
      </Box>
    </Box>
  ) : !chatThread && !chatAbout ? (
    <Box className={styles.page}>
      {!isGroupChatCreate ? (
        <MessagesList onCreateGroupClick={handleNewGroupCreate} />
      ) : (
        <NewGroupCreate onClose={handleNewGroupCreateClose} />
      )}
    </Box>
  ) : chatThread || chatAbout ? (
    <Box className={styles.threadcontent}>
      <ChatArea />
    </Box>
  ) : null;
}
