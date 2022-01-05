import { Button, IconButton, Switch } from '@material-ui/core';
import { Block, ChevronRight, Delete, PermMedia, Person, Share, VolumeOff } from '@material-ui/icons';
import { useState } from 'react';
import { useWindowSize } from '../../../core/hooks';
import styles from './AboutChatParticipant.module.scss';

import backIcon from '../../../assets/icons/left-arrow.svg';
import { useHistory } from 'react-router';
import MediaViewPage from './MediaViewPage';
import { Media, Link, Docs, Doc } from './MediaViewPage/index';

interface props {
  profilePic: string;
  userName: string;
  numMediaShared?: number;
  mediaPreviews?: [string, string?];
  groupChat?: boolean;
}

// TODO: -delete sample data and replcae with backend data
const smaplemedia: Media[] = [
  {
    month: 'This Month',
    images: [
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/b342/1d45/265e6f076ab7f8568f0e47e8e73bd536?Expires=1639958400&Signature=Q1u-NO2m-0z~~NvDQH4rif9OxsM9s~dPPNCH4oEtqulr~CY7c-LO9pFWNCsENDUFsyVybdUpPaUOS2CRH-Sddp4jRMbJk0yV3JpRHGO5RtbEzRXDBKZaMOe2xd2TKHHKnJei7gaDoSMp0kkNItzs~0M87yIL6Q81c2EH4Mp2LbyGV8y9YiCsUaCZJtL1RlRpd9jCPjmqfS6HWY8tgQcqmrDO2wwS7GalIh1p5fCKubnpy6XoQWVQTkQCWUWOLPnZKGMryGXZLnHHhq1jPVx-jRSdqGMrUcPMnOjDEH43XIx5ZRMhULyZKfcv8upjzvTejvbvcCr~HPT9Ot0dEiiunQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    ],
  },
  {
    month: 'September',
    images: [
      'https://s3-alpha-sig.figma.com/img/bfd0/5f2d/bcc1a078b4ec54e391d238b2db402a33?Expires=1639958400&Signature=DJC5jhrgFia3r3iEfK2yCFRYbNps4UDSnIXYH5ovvG5cbBoB5yccfGDhonxib2hf5O8vxjiCvn2DKUCoHYnMxHID-rqK8M1CXKB8qInyR~FPt4qlmcjeaZaoLVkhxuhIv5G4XlPX27zRGyiU6--BQRNBVLstUDWZSvWPE0mZdXYyC0pzHwOdceOz0LgqQ8MknE645gTt5z8TchR4FnWBA7lQ2~BmtitjlS8seKVQ-aWLULZoy6OrhXQ1KM4dSuQJ6bRVVkSSk~Dm5MyWbrFEe0YcCLZ-TOQZuFuLQrFSdAMWWs5ExTRHyXYwiAWwfVb0kbU38iRr2-9wJqVFt1pzGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/29dd/9725/aac660e3befc07f67a9e8525ced92a19?Expires=1639958400&Signature=UnwigO4GKIvFBGVWyzyAlYUwqG6FMOlckS74QHwo0rt2YaaiZMGJ8Wrhl0LB2dUmv8ZfopFeDLfv6BBJSKr4ysa0VHMGFvt-yYt9RdqycJ9ddHeLzhvsCDaCAOPcRYsPJSTzXseNq0Pln5kSL3gbiuZN8hJT8O5xBPY7wrhpUIkpL6x3Q~w0pxINGg-F9qGUNGnlS1fcPH41bz2217LYJuhbKlRaDKCkX1Eaosv5IaVGo1613Hyc7FN1S1A~DiGwaD1JO1~P2Ug8Gp7HGbGDa8FemQYqiCYeBk8suHdFjU0r0ehYgXOOrcLWX~L~PYav8LIGdUakr6HFRw3joQBPoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    ],
  },
  {
    month: 'September',
    images: [
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/5367/9ddc/77da2d155eec6c1f8aa74f108c409862?Expires=1639958400&Signature=FVpge3YFGveQcHMoRpxhdBeGol2jPZoTUZvLAH-7HSADVb3dVOUxwimXHtRsLPAS~XukFM6~K0OqqQ7TcmwvbudTZD0e1PAUs4KLnvsIlx6K8AOboZjT1g3aIwC91XKV2nDAsWhpXoEwfUZzkDOmZ967l2~Sna6iY8gBqUqzW-PqT0MM2iIgZBwbseYQyh94yTjiU1We~ZHK93KTdapBsae6u338T0KPZmOAxO3Mfet0Tr-JDKr2bSDwYIA6OFpEvgLjoNJRx6LakDOApMHiof4u~JfZ1ju9ADXz03saYZ-vBMKiLJ-87AGsTpgEKVra8gCdUOXjxWMgTu23VdR-vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    ],
  },
  {
    month: 'November',
    images: [
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/74de/bdbf/749d47fd4e03d8833779a44cd99e1f4e?Expires=1639958400&Signature=CDqgMTBFoqIx1G~nLsAhgjT6U0LvRe~FlH-UFX5DxC9tgoFVJTn7179ODRic~yhbrAzhym9Mrl9obxgzZStDEKWG2W0bDs3mEL2avUnMBnGks1rVPbxDrfP2~VlCF-gS3inwpFr4hRE2Eg7IRysxF6SFTpbOXg2UZGae9Nhd7XzkdvgJ3hdLvFJrQPb0kjA02FY88Vtq~7yUnbeo0io5mjRLAG-0sNWqVZ4OF2gzJIP0H~SHvfSmoBdrbrVlY4g2jqxYfbCtZftH6Erx7D~zozGAWc3h-lstFaYsZ~hhuGr5QPd3hmWhz0VZx~9xXVb6D~t54EWgXWlfSoyQl3dnYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      'https://s3-alpha-sig.figma.com/img/5367/9ddc/77da2d155eec6c1f8aa74f108c409862?Expires=1639958400&Signature=FVpge3YFGveQcHMoRpxhdBeGol2jPZoTUZvLAH-7HSADVb3dVOUxwimXHtRsLPAS~XukFM6~K0OqqQ7TcmwvbudTZD0e1PAUs4KLnvsIlx6K8AOboZjT1g3aIwC91XKV2nDAsWhpXoEwfUZzkDOmZ967l2~Sna6iY8gBqUqzW-PqT0MM2iIgZBwbseYQyh94yTjiU1We~ZHK93KTdapBsae6u338T0KPZmOAxO3Mfet0Tr-JDKr2bSDwYIA6OFpEvgLjoNJRx6LakDOApMHiof4u~JfZ1ju9ADXz03saYZ-vBMKiLJ-87AGsTpgEKVra8gCdUOXjxWMgTu23VdR-vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    ],
  },
];

const sampleLinks: Link[] = [
  {
    month: 'This Month',
    links: [
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
    ],
  },
  {
    month: 'September',
    links: [
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
    ],
  },
  {
    month: 'September',
    links: [
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
    ],
  },
  {
    month: 'November',
    links: [
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
      'https://meet.google.com/asy-uijs-arr',
    ],
  },
];

const sampleDocs: Docs[] = [
  {
    month: 'This Month',
    docs: [
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
    ],
  },
  {
    month: 'September',
    docs: [
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
    ],
  },
  {
    month: 'September',
    docs: [
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
    ],
  },
  {
    month: 'November',
    docs: [
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
      { fileName: 'Filename.jpg', fileFormat: 'jpg', fileSize: '34.8 KB' },
    ],
  },
];

const AboutChatParticipant: React.FC<props> = ({
  profilePic,
  userName,
  numMediaShared,
  mediaPreviews,
  groupChat,
}) => {
  // init
  const history = useHistory();
  // state
  const [isNotificationMute, setIsNotificationMute] = useState<boolean>(true);
  const [isMediaPage, setIsMediaPage] = useState<boolean>(false);

  // screen width
  const [width] = useWindowSize();
  return (
    <div className={styles.Container}>
      {!isMediaPage ? (
        <>
          <div className={styles.ProfileImage}>
            {width < 900 && (
              <IconButton className={styles.BackIcon} size='medium' onClick={() => history.goBack()}>
                <img key='1' src={backIcon} alt='Go back' />
              </IconButton>
            )}
            <img key='2' src={profilePic} alt='Profile' className={styles.profilePic} />
          </div>
          <p>{userName}</p>
          <div className={styles.List}>
            <Button key='0' className={styles.ListItem} onClick={() => setIsMediaPage(true)}>
              <div className={styles.LeftWrapper}>
                <PermMedia fontSize='large' />
                <p>Media, Links, Docs</p>
              </div>
              <span className={styles.MediaShared}>
                {mediaPreviews && mediaPreviews?.length > 0 && (
                  <div className={styles.MediaPreviews}>
                    {mediaPreviews?.map((image) => (
                      <img src={image} alt='' />
                    ))}
                  </div>
                )}
                {numMediaShared && (
                  <>
                    <p>{numMediaShared}</p>
                    <ChevronRight />
                  </>
                )}
              </span>
            </Button>
            <li key='1' className={styles.ListItem} style={{ cursor: 'default' }}>
              <div className={styles.LeftWrapper}>
                <VolumeOff fontSize='large' />
                <p>Mute Notifications</p>
              </div>
              <Switch
                className={styles.Switch}
                color='primary'
                onChange={() => setIsNotificationMute(!isNotificationMute)}
                checked={isNotificationMute}
              />
            </li>
            <Button key='2' className={styles.ListItem}>
              <div className={styles.LeftWrapper}>
                <Person fontSize='large' />
                <p>View Profile</p>
              </div>
            </Button>
            <Button key='3' className={styles.ListItem}>
              <div className={styles.LeftWrapper}>
                <Share fontSize='large' />
                <p>Share Profile</p>
              </div>
            </Button>
            <Button key='4' className={styles.ListItem}>
              <div className={styles.LeftWrapper}>
                <Block fontSize='large' />
                <p>Block User</p>
              </div>
            </Button>
            <Button key='5' className={styles.ListItem}>
              <div className={styles.LeftWrapper}>
                <Delete fontSize='large' />
                <p>Delete Chat</p>
              </div>
            </Button>
          </div>
        </>
      ) : (
        <MediaViewPage
          show={isMediaPage}
          media={smaplemedia}
          links={sampleLinks}
          docs={sampleDocs}
          onClose={() => {
            setIsMediaPage(false);
          }}
        />
      )}
    </div>
  );
};

export default AboutChatParticipant;
