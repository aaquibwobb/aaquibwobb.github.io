import { Box, Typography } from '@material-ui/core';
import { __tr } from '../../i18n';
import { Stars } from '../ui/Stars';
import { useAppUser } from '../../state/selectors';
import styles from '../../styles/UserResumeCard.module.scss';

export function UserResumeCard() {
	const { user } = useAppUser();
	return (
		<Box className={styles.page}>
			<Box className={styles.header}>
				<div className={styles.avatar}></div>
				<Typography variant='h6'>Lara Dennis</Typography>
				<span className={styles.influencer}>
					Influencer{' '}
					<span>
						{' '}
						<Stars count={4.1} /> (125)
					</span>{' '}
					(125)
				</span>
				<span className={styles.collabs}>
					collabs: jasmine.croucher@yahoo.com
				</span>
				<span className={styles.username}>username@gmail.com</span>
			</Box>
			{/* {!props.excludeStats && ( */}
			<Box className={styles.resumes}>
				<Box className={styles.resume}>
					<span className={styles.title}>20K</span>
					<span className={styles.subtitle}>totalReach</span>
				</Box>
				<Box className={styles.resume}>
					<span className={styles.title}>90%</span>
					<span className={styles.subtitle}>averageEngagement</span>
				</Box>
			</Box>
			{/* )} */}
		</Box>
	);
}
