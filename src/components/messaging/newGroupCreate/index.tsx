import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  List,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { VscArrowRight } from 'react-icons/vsc';
import { BsCamera, BsEmojiSmile } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';
import { MessageCard } from '../MessageCard';

import styles from './NewGroupCreate.module.scss';
import { useState } from 'react';
import MobileHeader from '../../ui/mobileHeader';
import { RiSearchLine } from 'react-icons/ri';
import { useHistory } from 'react-router';
import { Routes } from '../../../routes';

interface Props {
  onClose: () => void;
}

type GroupSettings = {
  [setting: string]: boolean;
};

const NewGroupCreate: React.FC<Props> = ({ onClose }) => {
  // initialize
  const history = useHistory();
  // state
  const [selectedParticipants, setSelectedParticipants] = useState<number[]>([]);
  const [isCreateGroupSetp2, setIsCreateGroupSetp2] = useState<boolean>(false);
  const [groupSettings, setGroupSettings] = useState<GroupSettings>({
    onlyAdminCanSeeAll: false,
    onlyAdminUpdateGroupInfo: false,
    allParticipantsAdmin: false,
  });

  // Array ofnum to loop over and get multiples message thread -delete later
  const threadsCount: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //   selecting participants
  const onSelectParticipants = (id: number) => {
    console.log(id);
    if (selectedParticipants.find((p) => p === id)) {
      const filteredParticipants = selectedParticipants.filter((p) => p !== id);
      setSelectedParticipants(filteredParticipants);
    } else {
      setSelectedParticipants((prevState: Array<number>) => [...prevState, id]);
    }
  };

  // group settings update
  const onGroupSettingsUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    const newSettings = { ...groupSettings };
    newSettings[event.target.name] = !groupSettings[event.target.name];
    setGroupSettings({ ...newSettings });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>New Group</p>
        <IconButton onClick={onClose}>
          <Close fontSize='medium' />
        </IconButton>
      </div>

      <div className={styles.mobileHeaderContainer}>
        <MobileHeader
          pageTitle='New Group'
          backOption
          onBackPress={() => {
            if (isCreateGroupSetp2) {
              setIsCreateGroupSetp2(false);
            } else {
              onClose();
            }
          }}
        >
          {!isCreateGroupSetp2 && (
            <div className={styles.headerChildren}>
              <IconButton key='1'>
                <RiSearchLine size={25} />
              </IconButton>
            </div>
          )}
        </MobileHeader>
      </div>
      {!isCreateGroupSetp2 ? (
        <>
          <div>
            <InputBase
              className={styles.searchbar}
              placeholder='Search User'
              startAdornment={<MdSearch size={24} color='#848484' />}
            />
          </div>
          <div className={styles.list}>
            <List>
              {threadsCount.map((v, i) => (
                <MessageCard
                  id={i}
                  selected={Boolean(selectedParticipants.find((p) => p === i + 1))}
                  profilePic={
                    'https://s3-alpha-sig.figma.com/img/c5dc/d1d1/3cddff1f356a74503a8b889871f3e425?Expires=1639353600&Signature=FtDW-CbC~5NM-NgYfU13Y~0Cz5aLXtpLXBym4bh8GzgY6yrwxrUg~Csxm4RNhW9WHAD0zHN0kWipxNRcKdty1tAF1YSLYrUpQF2ziPxTwsp6rClcmHkfKojSRGXcsxy1PrX6O846gkKCHgTuDMt8cRtDTJBeaHgcDRCNZJ4oc7yfZsDek1rtlqdpPRrGFV6i7y02lUC9LcllS-jYXv1-lahD9ooWZOvipXsUARjB~~wtW~r8lkXZ1vrVn-61ZtjoRl5vGLoQqLunXVz6mUS2xGNp5SpwmsQizstCmmyf3ezMxvNMJJP1YPe6pVZbHu1NIdYbQ19murkiHaCIhx8fig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                  }
                  userName={'Jonas William'}
                  message={'Influencer'}
                  onClick={() => onSelectParticipants(i + 1)}
                />
              ))}
            </List>
          </div>
          {selectedParticipants.length > 0 && (
            <div className={styles.bottomContainer}>
              <p>Selected: {selectedParticipants.length}</p>
              <IconButton onClick={() => setIsCreateGroupSetp2(true)}>
                <VscArrowRight />
              </IconButton>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.groupIdentity}>
            <IconButton size='medium'>
              <BsCamera size={52} />
            </IconButton>
            <div className={styles.groupName}>
              <input type='text' placeholder='Group name' />
              <span>
                <p>{25}</p>
                <IconButton size='small'>
                  <BsEmojiSmile size={22} />
                </IconButton>
              </span>
            </div>
          </div>
          <div className={styles.groupSettings}>
            <p>Group Setting</p>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name='onlyAdminCanSeeAll'
                    onChange={onGroupSettingsUpdate}
                    checked={groupSettings.onlyAdminCanSeeAll}
                    color='primary'
                  />
                }
                label='Only admin can see all participants and messages'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='onlyAdminUpdateGroupInfo'
                    onChange={onGroupSettingsUpdate}
                    checked={groupSettings.onlyAdminUpdateGroupInfo}
                    color='primary'
                  />
                }
                label='Only admin can change group name, description, icon and add participants'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='allParticipantsAdmin'
                    onChange={onGroupSettingsUpdate}
                    checked={groupSettings.allParticipantsAdmin}
                    color='primary'
                  />
                }
                label='All participants as admins'
              />
            </FormGroup>
          </div>
          <p>
            {selectedParticipants.length} {selectedParticipants.length === 1 ? 'Participant' : `Participants`}
          </p>
          <Button variant='contained' color='primary'>
            Create Group
          </Button>
        </>
      )}
    </div>
  );
};

export default NewGroupCreate;
