import { Box, Typography ,Avatar,} from '@material-ui/core';
import { Stars } from '../ui/Stars';
import { ContentRow } from './ContentRow';
import { __tr } from '../../i18n';
import { css } from '@emotion/css';

const styles = {
  tableContainer:css`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center,
  display: flex,
    flex-basis: content,`,
   container:css`
  margin-top:-110px,
  margin-left:10px ,
  display: flex,
  flex-direction:row,
    flex-basis: content,
    text-align:center`,
    cont:css``,
    key: css``,
    value: css`
    padding:1em,
    font-weight:600`,
  };





export function UserBio() {
  return (
    <Box>
       <Box className={styles.tableContainer}>
         <div>
        <Avatar alt="Remy Sharp" src="logo192.png" style={{height:"10vh",width:"19vw"}} />
           <Typography>
               Lara Dennis
            </Typography>
           <Typography color="textSecondary" variant="body2">
               Influencer
             <span>
              <Stars count={4.1} />(125)
            </span>
           </Typography>
           <Typography variant="body2">
               name@gmail.com
           </Typography>
           <Typography variant="body2" color="primary">
               @Lara Dennis
           </Typography>
           </div>
           <Box display='flex' flexDirection='row' textAlign='center' flexBasis='start'> 
          <div className={styles.container} >
          <Typography variant='body2'  className={styles.value}>
            20k
          </Typography>
          <Typography variant='body1'  style={{ fontWeight: 400,fontSize:'11px' }}>
               Total reach
          </Typography>
          </div>
          <div>
          <Typography variant='body2'  className={styles.value}>
             90%
          </Typography>
          <Typography variant='body1'  style={{ fontWeight: 400,fontSize:'11px',marginLeft:'20px' }}>
            Average Engagemnt
          </Typography>
          </div>
        </Box>
       </Box>
    </Box>
  );
}
