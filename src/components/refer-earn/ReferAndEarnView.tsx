import { Box, Grid, Paper, TextField, Typography, useTheme,useMediaQuery,} from '@material-ui/core';
import { BoxRecommendedCampaigns } from '../campaigns/BoxRecommendedCampaigns';
import { AppMetadata } from '../ui/AppMetadata';
import { Row, Col } from 'react-bootstrap';
import { IconMail, IconReferFriend } from '../ui/Icons';
import { TextTransformNoneButton } from '../ui/TextTransformNoneButton';
import WhatsappSvg from '../../assets/whatsapp.svg';
import LinkedInSvg from '../../assets/linkedin.svg';
import InstagramSvg from '../../assets/instagram.svg';
import { css } from '@emotion/css';
import { CssVariables } from '../../css-variables';
import { ReferredAccountList } from './ReferredAccountsView';
import { ReferAndEarnMobileView } from './ReferAndEarnMobileView';

const styles = {
  socials: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
  `,
  social: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2px;
  `,
  socialImg: css`
    width: 36px;
    height: 36px;
  `,
};

export function ReferAndEarnView() {
  const theme=useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);

  return (
    <>
    {isMatch ? (<ReferAndEarnMobileView/>) :
(<>    
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper elevation={0}>
          <Box padding={2}>
            <Typography variant='h6'>REFER & EARN</Typography>
          </Box>
          <Box padding={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Box
                  padding={2}
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='center'
                >
                  <IconReferFriend size={160} />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box paddingY={2}>
                  <Typography variant='body1'>
                    Start referring right away to start earning wobb coins.
                  </Typography>
                </Box>
                <Box paddingY={2}>
                  <TextField
                    fullWidth
                    placeholder='Enter email address'
                    InputProps={{
                      startAdornment: <IconMail size={24} />,
                      inputProps: {
                        style: {
                          paddingLeft: '8px',
                        },
                      },
                    }}
                  />
                </Box>
                <Box
                  paddingY={2}
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='center'
                >
                  <TextTransformNoneButton variant='contained' color='primary' size='large'>
                    Invite
                  </TextTransformNoneButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box paddingY={2}>
                  <TextField
                    fullWidth
                    value='https://wobb.ai/referral/user'
                    disabled
                    InputProps={{
                      startAdornment: <IconMail size={24} />,
                      inputProps: {
                        style: {
                          paddingLeft: '8px',
                          color: CssVariables.colorPrimary,
                        },
                      },
                    }}
                  />
                </Box>
                <Box
                  paddingY={2}
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='flex-start'
                >
                  <TextTransformNoneButton variant='text' color='primary' size='large'>
                    Copy link
                  </TextTransformNoneButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={styles.socials}>
                  <Box className={styles.social}>
                    <img src={WhatsappSvg} alt='whatsapp' className={styles.socialImg} />
                    <Typography variant='body2'>Whatsapp</Typography>
                  </Box>
                  <Box className={styles.social}>
                    <img src={InstagramSvg} alt='whatsapp' className={styles.socialImg} />
                    <Typography variant='body2'>Instagram</Typography>
                  </Box>
                  <Box className={styles.social}>
                    <img src={LinkedInSvg} alt='whatsapp' className={styles.socialImg} />
                    <Typography variant='body2'>LinkedIn</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Box padding={2}>
                    <Typography variant='h6'>MY REFERRALS</Typography>
                  </Box>
                  <Box>
                    <ReferredAccountList />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <BoxRecommendedCampaigns viewMore />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <AppMetadata />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>)}
        </>
  );
}
