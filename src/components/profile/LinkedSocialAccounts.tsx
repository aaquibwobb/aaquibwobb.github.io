import {
  Box,
  Divider,
  IconButton,
  Avatar,
  Button,
  Paper,
  Typography,
  Container
} from '@material-ui/core';
import { CampaignReview } from '../campaigns/CampaignReview';
import { __tr } from '../../i18n';
import CloseIcon from '@material-ui/icons/Close';
import { css } from '@emotion/css';
import styles from '../../styles/UserResumeCard.module.scss';
 const Styles = {
   cont:css`
   border:2px solid blue,
   display: flex,
    flex-direction: row,
    /* justify-content: center; */
    align-items: center`,
   resumes:css`
   display: flex,
    flex-direction: row,
    align-items: center,
    justify-items: center,
    margin-top:-10px`

 };

export function LinkedSocialAccounts() {
  return(
      <Box>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='' >
        <Box display='flex' flexDirection='row'>
        <Avatar></Avatar>
        <span style={{marginTop:'9px'}}>LifeStyledew</span>
        </Box>
        <Box  display='flex' flexDirection='row' marginLeft={2}>
          <Box className={styles.resume}>
            <span className={styles.title}>20K</span>
            <span className={styles.subtitle}>followers</span>
          </Box>
          <Box className={styles.resume}>
            <span className={styles.title}>90%</span>
            <span className={styles.subtitle}>averageEngagement</span>
          </Box>
        </Box>
        <Button variant='outlined' style={{ marginLeft:'2em' }}>Delete</Button>
      </Box>
      <Divider/>
      <Box marginX={2}  display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row' padding={2}>
        <Typography variant='body2' style={{ fontWeight: 500, }}>
         Campaigns Applied
      </Typography>
      <Typography variant='body2' style={{ fontWeight: 300, paddingLeft:"22em" }}>
          8
      </Typography>
        </Box>
        <Box display='flex' flexDirection='row' padding={2}>
        <Typography variant='body2' style={{ fontWeight: 500, }}>
         Hired Campaigns
      </Typography>
      <Typography variant='body2' style={{ fontWeight: 300,paddingLeft:"23em"  }}>
          8
      </Typography>
        </Box>
      </Box>
      <Divider/>
      <Box>
      <Box marginY={2}>
            <Box paddingY={2}>
              <Typography variant='h6'>campaignReview</Typography>
            </Box>
            <Box>
              <CampaignReview />
              <CampaignReview />
            </Box>
          </Box>
      </Box>
      
      </Box>

  );
}
