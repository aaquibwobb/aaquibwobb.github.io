import { Button, Divider, IconButton, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './MediaViewPage.module.scss';
import { AiOutlineFileImage } from 'react-icons/ai';

// asstet
import backIcon from '../../../../assets/icons/left-arrow.svg';
import { FiberManualRecord, InsertDriveFileOutlined } from '@material-ui/icons';
import { useWindowSize } from '../../../../core/hooks';
// import { useHistory } from 'react-router';

export type Media = {
  month: string;
  images: string[];
};

export type Link = {
  month: string;
  links: string[];
};

export type Doc = {
  file?: string;
  fileName: string;
  fileSize: string;
  fileFormat: string;
};

export type Docs = {
  month: string;
  docs: Doc[];
};

interface Props {
  show: boolean;
  onClose: () => void;
  media?: Media[];
  links?: Link[];
  docs?: Docs[];
}

const MediaViewPage: React.FC<Props> = ({ show, onClose, media, links, docs }) => {
  //state
  const [activeTab, setActiveTab] = useState(0);

  const [width] = useWindowSize();

  return show ? (
    <>
      <div className={styles.headerNav}>
        <IconButton className={styles.backIcon} size='medium' onClick={onClose}>
          <img src={backIcon} alt='Go back' />
        </IconButton>
        <Tabs
          onChange={(ev, newValue) => setActiveTab(newValue)}
          value={activeTab}
          aria-label='Tabs where each tab needs to be selected manually'
          className={styles.tabs}
          scrollButtons='off'
        >
          <Tab label='Media' className={styles.tab} classes={{ selected: styles.activeTab }} />
          <Tab label='Link' className={styles.tab} classes={{ selected: styles.activeTab }} />
          <Tab label='Docs' className={styles.tab} classes={{ selected: styles.activeTab }} />
        </Tabs>
        {/* <span></span> */}
      </div>
      <div className={styles.bottomContainer}>
        {activeTab === 0 ? (
          media && media.length > 0 ? (
            media.map((m) => (
              <div className={styles.media}>
                <p>{m.month}</p>
                <div>
                  {m.images.map((image) => (
                    <img src={image} alt='' />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No media to show</p>
          )
        ) : activeTab === 1 ? (
          links && links.length > 0 ? (
            links.map((m) => (
              <div className={styles.link}>
                <p>{m.month}</p>
                <div>
                  {m.links.map((link) => (
                    <a href={link}>{link}</a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No Links to show</p>
          )
        ) : docs && docs.length > 0 ? (
          docs.map((m) => (
            <div className={styles.docs}>
              <p>{m.month}</p>
              <div>
                {m.docs.map((doc) => (
                  <Button className={styles.doc}>
                    <AiOutlineFileImage />
                    <p>
                      {doc.fileName}
                      <span>
                        {doc.fileSize} <span> {'.'}</span> {doc.fileFormat}{' '}
                      </span>
                    </p>
                  </Button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No Links to show</p>
        )}
      </div>
    </>
  ) : null;
};

export default MediaViewPage;
