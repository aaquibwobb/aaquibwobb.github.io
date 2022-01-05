import { Drawer, Hidden, IconButton, InputBase, Popover } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { __tr } from '../i18n';
import { Routes } from '../routes';
import styles from '../styles/TopAppBar.module.scss';
import { IconBrowse, IconChat, IconHeart, IconMegaphone, IconSearch } from './ui/Icons';
import { Logo } from './ui/Logo';
import { MdPeople, MdArrowDropDown, MdMenu, MdPerson } from 'react-icons/md';
import { useState } from 'react';
import { ProfileNavigationCard } from './profile/ProfileNavigationCard';


export function TopAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileNavigationAnchor, setProfileNavigationAnchor] = useState<HTMLElement>();
  
  return (
      <div className={styles.toolbar}>
      <div className={styles.logoWrapper}>
        <Logo size={100} />
      </div>
      <div className={styles.actions}>
        <Hidden smDown>
          <InputBase
            placeholder={'Search for something'}
            startAdornment={<IconSearch size={18} />}
            className={styles.searchInput}
          />
        </Hidden>
        <Hidden smDown>
          <nav className={styles.navigation}>
            {/* <NavLink
              to={Routes.Discover}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconBrowse size={24} />
              </div>
              <span className={styles.title}>{__tr('discover')}</span>
            </NavLink> */}
            <NavLink
              to={Routes.BaseCampaigns}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconMegaphone size={24} />
              </div>
              <span className={styles.title}>{__tr('myCampaigns')}</span>
            </NavLink>
            <NavLink
              to={Routes.Messages}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconChat size={24} />
              </div>
              <span className={styles.title}>{__tr('messages')}</span>
            </NavLink>
            <NavLink
              to={Routes.Notifications}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconHeart size={24} />
              </div>
              <span className={styles.title}>{__tr('notifications')}</span>
            </NavLink>
            <span
              style={{ cursor: 'pointer' }}
              role='button'
              className={styles.me}
              onClick={(ev) => setProfileNavigationAnchor(ev.currentTarget)}
            >
              <img
                src='https://s3-alpha-sig.figma.com/img/8f44/f319/1be25ba42799a83dba0b22effee5178b?Expires=1639958400&Signature=Dg9B-ELXR9gmgTsC6-LkpHh3injbxLk~IotoMqDrdY6MC9ks49CyD~vg2~8PBUY~-fU~fhYhb~xm8QCUltF9MrHHrCzNhu4uLxAaWwLs3xAeIl3hsKkO7-6mTIn8IX2rZidRGmVHVYJPmMqw8NUSoqodSP-Oa15vFrhdGfU7JXxF~poQbQhQxB48kLUu0GVawvW3Ol4XdP~2zxkPEPMZNRb-730hbSlGqRS~jQrtbFx2dYWZGbEqSzytQYDL3whBHO~5EqTmzyB06NARQHTPFCGwa9a-cyHEiycyx4tt3W60LKgTZA52N1ufYSpBfGILgdVMIbfKmY1aB5z3kHq1Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                alt='profile'
              />
              <div className={styles.titleWrapper}>
                <span className={styles.title}>{__tr('me')}</span>
                <MdArrowDropDown size={32} />
              </div>
            </span>
            <Popover
              elevation={2}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={Boolean(profileNavigationAnchor)}
              anchorEl={profileNavigationAnchor}
              onClose={() => setProfileNavigationAnchor(undefined)}
            >
              <ProfileNavigationCard />
            </Popover>
          </nav>
        </Hidden>
      </div>
      <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className={styles.drawer_menu}>
          <nav className={styles.navigation}>
            <NavLink
              to={Routes.Discover}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconBrowse size={24} />
              </div>
              <span className={styles.title}>{__tr('discover')}</span>
            </NavLink>
            <NavLink
              to={Routes.BaseCampaigns}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconMegaphone size={24} />
              </div>
              <span className={styles.title}>{__tr('myCampaigns')}</span>
            </NavLink>
            <NavLink
              to={Routes.Messages}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconChat size={24} />
              </div>
              <span className={styles.title}>{__tr('messages')}</span>
            </NavLink>
            <NavLink
              to={Routes.Notifications}
              className={styles.navigationItem}
              activeClassName={styles.navigationItemActive}
            >
              <div className={styles.icon}>
                <IconHeart size={24} />
              </div>
              <span className={styles.title}>{__tr('notifications')}</span>
            </NavLink>
            <button className={styles.me}>
              <img
                src='https://s3-alpha-sig.figma.com/img/8f44/f319/1be25ba42799a83dba0b22effee5178b?Expires=1639958400&Signature=Dg9B-ELXR9gmgTsC6-LkpHh3injbxLk~IotoMqDrdY6MC9ks49CyD~vg2~8PBUY~-fU~fhYhb~xm8QCUltF9MrHHrCzNhu4uLxAaWwLs3xAeIl3hsKkO7-6mTIn8IX2rZidRGmVHVYJPmMqw8NUSoqodSP-Oa15vFrhdGfU7JXxF~poQbQhQxB48kLUu0GVawvW3Ol4XdP~2zxkPEPMZNRb-730hbSlGqRS~jQrtbFx2dYWZGbEqSzytQYDL3whBHO~5EqTmzyB06NARQHTPFCGwa9a-cyHEiycyx4tt3W60LKgTZA52N1ufYSpBfGILgdVMIbfKmY1aB5z3kHq1Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                alt='profile'
              />

              <div className={styles.titleWrapper}>
                <span className={styles.title}>{__tr('me')}</span>
                <MdArrowDropDown size={24} />
              </div>
            </button>
          </nav>
        </div>
      </Drawer>
    </div>
   
  );
}
