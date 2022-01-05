import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Popover,
  Typography,
  withStyles,
} from '@material-ui/core';
import { AttachFile, EmojiEmotions, Gif, ImageSharp } from '@material-ui/icons';
import { useState } from 'react';
import { MdClose, MdMoreVert } from 'react-icons/md';
import { AppMetadata } from '../ui/AppMetadata';
import { TextTransformNoneButton } from '../ui/TextTransformNoneButton';
import styles from '../../styles/ChatArea.module.scss';
import AboutChatParticipant from './AboutChatParticipant/index';
import { useUrlQuery, useWindowSize } from '../../core/hooks';
import MessagesArea from './mobile/messagesArea';
import { useHistory, useLocation } from 'react-router';

const SendButton = withStyles({
  root: {
    borderRadius: 46,
    padding: '4px 16px',
  },
})(TextTransformNoneButton);

export function ChatArea() {
  // initialize
  const history = useHistory();
  const location = useLocation();
  // local state
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement>();

  // url query
  const chatAbout = useUrlQuery('about', '');
  const chatThread = useUrlQuery('thread', '');
  const urlParams = new URLSearchParams(location.search);

  return (
    <>
      <Box className={styles.wrapper}>
        <Box className={styles.chatbox}>
          <MessagesArea
            fullName={'Jhon William'}
            groupChat
            // profilePic={
            //   'https://s3-alpha-sig.figma.com/img/29dd/9725/aac660e3befc07f67a9e8525ced92a19?Expires=1639353600&Signature=BgCCoBEUhJ9J7hVgZ1QtBJS8mr1b3h7uXMGlACpbnmHSMtXGMmWt2l~-8mHMBrdY1Ha~ORx6Uki5IppwTINeo1UcR0BgOiWX5nlv5GrFGsGp284gEhFsPMLdxFXJ2GLsGzB9MzKnqVdxrkXwHfIe3XPH5jDrhCrmi4QE9Xiwjm3rrMmwVVabyaPky6fIYdSX0DsQrQMuF60vM15~i0DAdf2-H7LSjGqajjxvTV4kHQs9qa-O2OLEI9nHWbPb7wlQGgGbQWpGyJhBZ0x2ljB3dgGIWfevmV-GJGbNKhzitGkzFL~wkM4GOtpyUrK4PQ2rsC52XMKczV0LosWpDV8JEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            // }
            profilePic={
              'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1639958400&Signature=DJC5jhrgFia3r3iEfK2yCFRYbNps4UDSnIXYH5ovvG5cbBoB5yccfGDhonxib2hf5O8vxjiCvn2DKUCoHYnMxHID-rqK8M1CXKB8qInyR~FPt4qlmcjeaZaoLVkhxuhIv5G4XlPX27zRGyiU6--BQRNBVLstUDWZSvWPE0mZdXYyC0pzHwOdceOz0LgqQ8MknE645gTt5z8TchR4FnWBA7lQ2~BmtitjlS8seKVQ-aWLULZoy6OrhXQ1KM4dSuQJ6bRVVkSSk~Dm5MyWbrFEe0YcCLZ-TOQZuFuLQrFSdAMWWs5ExTRHyXYwiAWwfVb0kbU38iRr2-9wJqVFt1pzGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            }
          />
        </Box>
        <Box className={styles.aboutWrapper}>
          {chatAbout && (
            <Box className={styles.about}>
              <Box className={styles.header}>
                <Typography>About</Typography>
                <IconButton
                  size='small'
                  onClick={() => {
                    if (urlParams.has('about')) {
                      urlParams.delete('about');
                      history.replace({
                        search: urlParams.toString(),
                      });
                    }
                  }}
                >
                  <MdClose size={20} />
                </IconButton>
              </Box>
              <AboutChatParticipant
                profilePic={
                  'https://s3-alpha-sig.figma.com/img/29dd/9725/aac660e3befc07f67a9e8525ced92a19?Expires=1639353600&Signature=BgCCoBEUhJ9J7hVgZ1QtBJS8mr1b3h7uXMGlACpbnmHSMtXGMmWt2l~-8mHMBrdY1Ha~ORx6Uki5IppwTINeo1UcR0BgOiWX5nlv5GrFGsGp284gEhFsPMLdxFXJ2GLsGzB9MzKnqVdxrkXwHfIe3XPH5jDrhCrmi4QE9Xiwjm3rrMmwVVabyaPky6fIYdSX0DsQrQMuF60vM15~i0DAdf2-H7LSjGqajjxvTV4kHQs9qa-O2OLEI9nHWbPb7wlQGgGbQWpGyJhBZ0x2ljB3dgGIWfevmV-GJGbNKhzitGkzFL~wkM4GOtpyUrK4PQ2rsC52XMKczV0LosWpDV8JEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                }
                userName={'Jhon William'}
                numMediaShared={8}
                mediaPreviews={[
                  'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1639958400&Signature=DJC5jhrgFia3r3iEfK2yCFRYbNps4UDSnIXYH5ovvG5cbBoB5yccfGDhonxib2hf5O8vxjiCvn2DKUCoHYnMxHID-rqK8M1CXKB8qInyR~FPt4qlmcjeaZaoLVkhxuhIv5G4XlPX27zRGyiU6--BQRNBVLstUDWZSvWPE0mZdXYyC0pzHwOdceOz0LgqQ8MknE645gTt5z8TchR4FnWBA7lQ2~BmtitjlS8seKVQ-aWLULZoy6OrhXQ1KM4dSuQJ6bRVVkSSk~Dm5MyWbrFEe0YcCLZ-TOQZuFuLQrFSdAMWWs5ExTRHyXYwiAWwfVb0kbU38iRr2-9wJqVFt1pzGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                ]}
                groupChat
              />
            </Box>
          )}
          {chatAbout && (
            <Box padding={2}>
              <AppMetadata />
            </Box>
          )}
        </Box>
      </Box>
      <div className={styles.mobileContainer}>
        {chatThread ? (
          <div>
            <MessagesArea
              fullName={'Jhon William'}
              // profilePic={
              //   'https://s3-alpha-sig.figma.com/img/29dd/9725/aac660e3befc07f67a9e8525ced92a19?Expires=1639353600&Signature=BgCCoBEUhJ9J7hVgZ1QtBJS8mr1b3h7uXMGlACpbnmHSMtXGMmWt2l~-8mHMBrdY1Ha~ORx6Uki5IppwTINeo1UcR0BgOiWX5nlv5GrFGsGp284gEhFsPMLdxFXJ2GLsGzB9MzKnqVdxrkXwHfIe3XPH5jDrhCrmi4QE9Xiwjm3rrMmwVVabyaPky6fIYdSX0DsQrQMuF60vM15~i0DAdf2-H7LSjGqajjxvTV4kHQs9qa-O2OLEI9nHWbPb7wlQGgGbQWpGyJhBZ0x2ljB3dgGIWfevmV-GJGbNKhzitGkzFL~wkM4GOtpyUrK4PQ2rsC52XMKczV0LosWpDV8JEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              // }
              profilePic={
                'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1639958400&Signature=DJC5jhrgFia3r3iEfK2yCFRYbNps4UDSnIXYH5ovvG5cbBoB5yccfGDhonxib2hf5O8vxjiCvn2DKUCoHYnMxHID-rqK8M1CXKB8qInyR~FPt4qlmcjeaZaoLVkhxuhIv5G4XlPX27zRGyiU6--BQRNBVLstUDWZSvWPE0mZdXYyC0pzHwOdceOz0LgqQ8MknE645gTt5z8TchR4FnWBA7lQ2~BmtitjlS8seKVQ-aWLULZoy6OrhXQ1KM4dSuQJ6bRVVkSSk~Dm5MyWbrFEe0YcCLZ-TOQZuFuLQrFSdAMWWs5ExTRHyXYwiAWwfVb0kbU38iRr2-9wJqVFt1pzGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
              groupChat
            />
          </div>
        ) : chatAbout ? (
          <div>
            <AboutChatParticipant
              profilePic={
                'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1638748800&Signature=I1m5ksDzQOzQDbeIqaWiJhHTF2BghAOiixGV-~oyggbCRuWNyfXCpWmC6hv7WGhK1xyReHwjAHusbzRNKCCICOC63ZW7yVtcW01~KUx9sutfdRDKYqAtOwhv5S5-86fH-eE0q1A~m4qR32oQ~TB8nYlmZ4uEmOG7lPPLCh6wMkbGJalUZSagjvPjcyD39FCADaYKHibqDAbmqjiKa~wNbQSjT-ln6oMBEXEomCUX2bPHIEsvHtKeyZ2cKIU62Hls6hzy1FnUeVKXENsrOJau8iaooCW-3epkAIroRt1VTznhfn7o78nmluwwVMFyOrVMIOac~IcKhIDEwxoFBCVyig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
              // profilePic={
              //   'https://s3-alpha-sig.figma.com/img/29dd/9725/aac660e3befc07f67a9e8525ced92a19?Expires=1639353600&Signature=BgCCoBEUhJ9J7hVgZ1QtBJS8mr1b3h7uXMGlACpbnmHSMtXGMmWt2l~-8mHMBrdY1Ha~ORx6Uki5IppwTINeo1UcR0BgOiWX5nlv5GrFGsGp284gEhFsPMLdxFXJ2GLsGzB9MzKnqVdxrkXwHfIe3XPH5jDrhCrmi4QE9Xiwjm3rrMmwVVabyaPky6fIYdSX0DsQrQMuF60vM15~i0DAdf2-H7LSjGqajjxvTV4kHQs9qa-O2OLEI9nHWbPb7wlQGgGbQWpGyJhBZ0x2ljB3dgGIWfevmV-GJGbNKhzitGkzFL~wkM4GOtpyUrK4PQ2rsC52XMKczV0LosWpDV8JEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              // }
              userName={'Jhon William'}
              numMediaShared={18}
              mediaPreviews={[
                'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1639958400&Signature=DJC5jhrgFia3r3iEfK2yCFRYbNps4UDSnIXYH5ovvG5cbBoB5yccfGDhonxib2hf5O8vxjiCvn2DKUCoHYnMxHID-rqK8M1CXKB8qInyR~FPt4qlmcjeaZaoLVkhxuhIv5G4XlPX27zRGyiU6--BQRNBVLstUDWZSvWPE0mZdXYyC0pzHwOdceOz0LgqQ8MknE645gTt5z8TchR4FnWBA7lQ2~BmtitjlS8seKVQ-aWLULZoy6OrhXQ1KM4dSuQJ6bRVVkSSk~Dm5MyWbrFEe0YcCLZ-TOQZuFuLQrFSdAMWWs5ExTRHyXYwiAWwfVb0kbU38iRr2-9wJqVFt1pzGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              ]}
              groupChat
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
