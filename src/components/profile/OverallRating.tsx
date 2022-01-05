import { css } from '@emotion/css';
import { Box, Typography ,Hidden} from '@material-ui/core';
import { Stars } from '../ui/Stars';
import { UnmodifiableProgress } from '../ui/UnmodifiableProgress';
import { CssVariables } from '../../css-variables';
import { __tr } from '../../i18n';
import { ContentRow } from './ContentRow';

const styles = {
  tableContainer: css`
    width: 100%;
  `,
  cellProgress: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  progress: css`
    width: 64px;
    margin-right: 4px;
  `,
  percent: css`
    font-size: ${CssVariables.fontSizeBodyText};
    font-weight: 500;
  `,
  hour: css`
    font-weight: bold !important;
    color: ${CssVariables.colorPrimary};
  `,
  key: css``,
  value: css``,
};

export function OverallRating() {
  return (
    <Box>
      <Box className={styles.tableContainer}>
      <Hidden smDown>
        <ContentRow>
          <Typography variant='body1' className={styles.key} style={{ fontWeight: 600 }}>
            Overall Rating
          </Typography>
          <div className={styles.cellProgress}>
            <span>
              <Stars count={4.1} /> (100)
            </span>
          </div>
        </ContentRow>
        <ContentRow>
          <Typography variant='body2' className={styles.key}>
            Inbox response rate
          </Typography>
          <div className={styles.cellProgress}>
            <div className={styles.progress}>
              <UnmodifiableProgress height={8} progress={50} />
            </div>
            <span className={styles.percent}>50%</span>
          </div>
        </ContentRow>
        <ContentRow>
          <Typography variant='body2' className={styles.key}>
            First Response Time
          </Typography>
          <Typography variant='body2' color='primary' className={styles.value}>
            2h 20min
          </Typography>
        </ContentRow>
        <ContentRow>
        <Typography variant='body2' className={styles.key}>
            First Response Time
          </Typography>
          <Typography variant='body2' color='primary' className={styles.value}>
            2h 30min
          </Typography>
        </ContentRow>
    </Hidden>
      </Box>
    </Box>
  );
}
