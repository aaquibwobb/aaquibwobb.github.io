import { Backdrop, Menu, MenuItem } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { useWindowSize } from '../../../../core/hooks';
import ChatControls from '../chatControls';
import ChatHeader from '../chatHeader';
import MessageReceived from './messageReceived';
import styles from './messagesArea.module.scss';
import MessageSent from './messageSent';

interface message {
  id: string;
  isSent: boolean;
  text: string;
  time: string;
  image?: string;
}

// sample messages -delete later
const messagesSample: Array<message> = [
  {
    id: '1',
    isSent: false,
    text: 'Hey, Jenny look this cat sleep in my arms',
    time: '10:48 PM',
    image:
      'https://s3-alpha-sig.figma.com/img/b342/1d45/265e6f076ab7f8568f0e47e8e73bd536?Expires=1639958400&Signature=Q1u-NO2m-0z~~NvDQH4rif9OxsM9s~dPPNCH4oEtqulr~CY7c-LO9pFWNCsENDUFsyVybdUpPaUOS2CRH-Sddp4jRMbJk0yV3JpRHGO5RtbEzRXDBKZaMOe2xd2TKHHKnJei7gaDoSMp0kkNItzs~0M87yIL6Q81c2EH4Mp2LbyGV8y9YiCsUaCZJtL1RlRpd9jCPjmqfS6HWY8tgQcqmrDO2wwS7GalIh1p5fCKubnpy6XoQWVQTkQCWUWOLPnZKGMryGXZLnHHhq1jPVx-jRSdqGMrUcPMnOjDEH43XIx5ZRMhULyZKfcv8upjzvTejvbvcCr~HPT9Ot0dEiiunQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: '2',
    isSent: true,
    text: 'It looks cute, I love cats',
    time: '10:52 PM',
  },
  {
    id: '3',
    isSent: true,
    text: 'Use picture like this for office place in promotion.',
    time: '11:15 AM',
    image:
      'https://s3-alpha-sig.figma.com/img/5367/9ddc/77da2d155eec6c1f8aa74f108c409862?Expires=1639958400&Signature=FVpge3YFGveQcHMoRpxhdBeGol2jPZoTUZvLAH-7HSADVb3dVOUxwimXHtRsLPAS~XukFM6~K0OqqQ7TcmwvbudTZD0e1PAUs4KLnvsIlx6K8AOboZjT1g3aIwC91XKV2nDAsWhpXoEwfUZzkDOmZ967l2~Sna6iY8gBqUqzW-PqT0MM2iIgZBwbseYQyh94yTjiU1We~ZHK93KTdapBsae6u338T0KPZmOAxO3Mfet0Tr-JDKr2bSDwYIA6OFpEvgLjoNJRx6LakDOApMHiof4u~JfZ1ju9ADXz03saYZ-vBMKiLJ-87AGsTpgEKVra8gCdUOXjxWMgTu23VdR-vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: '4',
    isSent: false,
    text: 'Yes, it’ll provide me better brands and weekly earnings',
    time: '13:35 PM',
  },
  {
    id: '5',
    isSent: false,
    text: 'Call back when you`re free',
    time: '13:40 PM',
  },
];

interface Props {
  fullName: string;
  profilePic: string;
  groupChat?: boolean;
}

const MessagesArea: React.FC<Props> = ({ fullName, profilePic, groupChat }) => {
  const [messageSelected, setMessageSelected] = useState<message>();
  const [openOptionModal, setopenOptionModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [option, setOptionSelected] = useState<String>('');

  const messageOption: Array<string> = useMemo(() => ['Reply', 'Forward', 'Copy', 'Delete'], []);

  useEffect(() => {
    if (groupChat) {
      messageOption.push(`Message ${fullName}`);
    }
  }, [fullName, groupChat, messageOption]);

  // window screen width
  const [width] = useWindowSize();

  const handleOptionModalOpen = (el: HTMLElement | null, message: message) => {
    setAnchorEl(el);
    setMessageSelected(message);
    setopenOptionModal(true);
  };

  const handleOptionModalClose = () => {
    setopenOptionModal(false);
    setMessageSelected(undefined);
  };

  const onOptionSelect = (option: string) => {
    setOptionSelected(option);
  };
  // console.log('message selected', messageSelected);
  // console.log('option selected', option);
  return (
    <div className={styles.Container}>
      <ChatHeader fullName={fullName} profilePic={profilePic} />
      <div className={styles.MessageArea}>
        {messagesSample.map(({ id, isSent, text, time, image }) =>
          isSent ? (
            <MessageSent key={id} text={text} time={time} image={image ? image : ''} />
          ) : (
            <MessageReceived
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                handleOptionModalOpen(e.currentTarget, { id, isSent, text, time, image });
              }}
              onClickDownArrow={(el: HTMLDivElement | null) => {
                handleOptionModalOpen(el, { id, isSent, text, time, image });
              }}
              key={id}
              text={text}
              time={time}
              userName={fullName}
              image={image ? image : ''}
              groupChat={!!groupChat}
              isSelected={!!messageSelected && messageSelected.id === id}
            />
          )
        )}
        <Backdrop
          style={{ color: '#333333', opacity: width >= 900 ? '.0' : '.55', zIndex: '200' }}
          open={openOptionModal}
          className={styles.backdrop}
          onClick={() => handleOptionModalClose()}
        >
          <>
            <Menu
              PaperProps={{
                style: {
                  width: 222,
                },
              }}
              anchorEl={anchorEl}
              open={openOptionModal}
              onClose={() => handleOptionModalClose()}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              getContentAnchorEl={null}
            >
              {messageOption.map((option) => {
                return (
                  <MenuItem className={styles.list} key={option} onClick={() => onOptionSelect(option)}>
                    <span>{option}</span>
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        </Backdrop>
      </div>
      <ChatControls groupChat={!!groupChat} />
    </div>
  );
};

export default MessagesArea;
