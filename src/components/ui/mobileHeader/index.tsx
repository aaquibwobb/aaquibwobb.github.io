import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import styles from './mobileHeader.module.scss';
import backButtonIcon from '../../../assets/icons/left-arrow.svg';
import { useDispatch } from 'react-redux';
import Auth from '@aws-amplify/auth';
import React, { useCallback, useState } from 'react';
import { setCurrentUser } from '../../../state/action-creators';
import { useHistory } from 'react-router';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from './mobileMenu';
import { Routes } from '../../../routes';
import { TextTransformNoneButton } from '../TextTransformNoneButton';

interface props {
  backOption?: boolean;
  pageTitle: string;
  onBackPress?: () => void;
}

const MobileHeader: React.FC<props> = ({ children, backOption, pageTitle, onBackPress }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // state
  const [openMenu, setOpenMenu] = useState(false);
  const [askingSignOut, setAskingSignout] = useState(false);

  const onSignOut = useCallback(async () => {
    setAskingSignout(false);
    await Auth.signOut();
    /// unset the user in app state.
    dispatch(setCurrentUser(undefined));
    history.replace(Routes.Base);
  }, [history, dispatch]);
  return (
    <div className={styles.Container}>
      <div className={styles.LeftContainer}>
        <MobileMenu
          open={openMenu}
          onOpen={() => setOpenMenu(true)}
          onClose={() => setOpenMenu(false)}
          onLogout={() => setAskingSignout(true)}
          userType={'Influencer'}
          numReviews={125}
          userName={'Lara Dennis'}
          userRating={4.0}
          profilePic={
            'https://s3-alpha-sig.figma.com/img/8f44/f319/1be25ba42799a83dba0b22effee5178b?Expires=1639353600&Signature=bUrqzkKwuWum~DFAIzn4MhLmL1SJpgkbCM6BnWI76HckrHBOc9ns7PLNpclM6uneYyNXLr6WbqcEVFHZcWl2mwuHs5k~PWvcqHnlRWVeFJdLuJeGW6bt1A2xDmfU747tfkOdtIMwpCX-kvAMkyNzsMw1k33AKIGhO0tPn28LKK7KTRyHBpfEH8qIKB-Kji0phXCkkQwjWhO5UlhF5PE7Q~9cmTJuZqvgZemNwtmy570z0~hVl-DsZHx9Xowfokf2fKjqKsC8JIH5PoJqJY08n1bz-Y00fnGy4RwOYY53BBqon6HvlJVdmMLqc~dCyMasD-Td5XkxwJKFQYehr5UChQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          }
        />
        <IconButton size='small'>
          {!backOption && <FiMenu size='30' className={styles.MenuIcon} onClick={() => setOpenMenu(true)} />}
          {backOption && (
            <img src={backButtonIcon} alt='Go back' className={styles.BackIcon} onClick={onBackPress} />
          )}
        </IconButton>
        <p className={styles.PageTitle}>{pageTitle}</p>
        <div>
          <Dialog open={askingSignOut} onClose={() => setAskingSignout(false)} fullWidth>
            <DialogTitle>Exit</DialogTitle>
            <DialogContent>
              <DialogContentText>Please confirm again to exit.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <TextTransformNoneButton
                variant='outlined'
                color='primary'
                onClick={() => setAskingSignout(false)}
              >
                Cancel
              </TextTransformNoneButton>
              <TextTransformNoneButton variant='contained' color='primary' onClick={onSignOut}>
                Yes, exit
              </TextTransformNoneButton>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div className={styles.RightContainer}>{children}</div>
    </div>
  );
};

export default MobileHeader;
