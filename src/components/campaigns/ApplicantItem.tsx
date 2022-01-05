import { css } from '@emotion/css';
import { Avatar } from '@material-ui/core';
import { UnmodifiableProgress } from '../ui/UnmodifiableProgress';
import { CssVariables } from '../../css-variables';

const styles = {
  item: css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  text: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 8px;

    * {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  name: css`
    font-size: ${CssVariables.fontSizeTextPrimary};
    font-weight: 400;
    margin-bottom: 8px;
  `,
  match: css`
    font-size: ${CssVariables.fontSizeAnySmall};
    font-weight: 300;
    margin-top: 4px;
    color: ${CssVariables.colorGrayV2};
  `,
};
export function ApplicantItem() {
  return (
    <div className={styles.item}>
      <div>
        <Avatar />
      </div>
      <div className={styles.text}>
        <span className={styles.name}>Influencer name</span>
        <UnmodifiableProgress progress={60} />
        <span className={styles.match}>88% match</span>
      </div>
    </div>
  );
}
