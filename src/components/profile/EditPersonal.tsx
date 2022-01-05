import Auth from '@aws-amplify/auth';
import { DataStore } from '@aws-amplify/datastore';
import {
	Box,
	Grid,
	InputLabel,
	MenuItem,
	TextField,
	withStyles,
	Hidden,
	Typography,
	Avatar,
	IconButton,
	Divider,
} from '@material-ui/core';
import { useState } from 'react';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { PhoneField } from '../ui/PhoneField';
import { TextTransformNoneButton } from '../ui/TextTransformNoneButton';
import { Validators } from '../../core/validators';
import { __tr } from '../../i18n';
import { Gender } from '../../models';
import { setUserProfile } from '../../state/action-creators';
import { fetchCognitoUser } from '../../state/middlewares';
import { useAppUser } from '../../state/selectors';
import { EditPassword } from './EditPassword';
import { css } from '@emotion/css';
import { ContentRow } from './ContentRow';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const styles = {
	avtar: css`
		height: 70px;
		width: 70px;
	`,
	key: css``,
	value: css`
		padding-left: 8px;
	`,
};
const CustomizedBtn = withStyles({
	root: {
		padding: '16px',
		minWidth: '160px',
	},
})(TextTransformNoneButton);

export function EditPersonal() {
	const { user, profile } = useAppUser();
	const dispatch = useDispatch();
	const [busy, setBusy] = useState(false);
	const [phonePrefix, setPhonePrefix] = useState('+93');
	const [errors, setErrors] = useState<any>({});

	const onSubmit = useCallback(
		async (ev: ChangeEvent<HTMLFormElement>) => {
			ev.preventDefault();

			// let form = ev.currentTarget;

			// let dob = (form.dob as HTMLInputElement).valueAsDate?.toLocaleDateString(
			// 	'fr-CA'
			// );

			// let data = {
			// 	name: form.uname.value,
			// 	username: form.username.value,
			// 	bio: form.bio.value,
			// 	website: form.website.value,
			// 	email: form.email.value,
			// 	phone: `${phonePrefix} ${form.phone.value}`,
			// 	gender: form.gender.value,
			// 	dob: dob || '',
			// 	interests: '',
			// 	language: form.language.value,
			// };

			// let nextErrs: any = {};

			// if (!Validators.isValidName(data.name)) {
			// 	nextErrs.name = __tr('errorInvalidName');
			// }
			// if (!Validators.isUsername(data.username)) {
			// 	nextErrs.username = __tr('errorInvalidUsername');
			// }
			// if (!Validators.isBio(data.bio)) {
			// 	nextErrs.bio = __tr('errorInvalidBio');
			// }
			// if (!Validators.isLink(data.website)) {
			// 	nextErrs.website = __tr('errorInvalidWebsite');
			// }
			// if (!Validators.isEmail(data.email)) {
			// 	nextErrs.email = __tr('errorInvalidEmail');
			// }
			// if (!Validators.isPhone(data.phone)) {
			// 	nextErrs.phone = __tr('errorInvalidPhone');
			// }
			// if (!dob) {
			// 	nextErrs.dob = __tr('errorInvalidDate');
			// }

			// setErrors(nextErrs);
			// if (Object.keys(nextErrs).length > 0) {
			// 	return;
			// }

			// try {
			// 	setBusy(true);
			// 	let nextProfile: Profile | null = null;
			// 	if (profile) {
			// 		nextProfile = Profile.copyOf(profile, p => {
			// 			p.username = data.name;
			// 			p.Interest = data.interests;
			// 			p.Language = data.language;
			// 			//p.Email = data.email;
			// 			p.website = data.website;
			// 			//p.PhoneNo = data.phone.replace(' ', '');
			// 			p.username = data.username;
			// 			p.DoB = dob;
			// 		});
			// 	} else {
			// 		nextProfile = new Profile({
			// 			uid: user.sub,
			// 			//Interest: data.interests.join(','),
			// 			Language: data.language,
			// 			website: data.website,
			// 			username: data.username,
			// 			name: data.name,
			// 			DoB: dob,
			// 			Gender: Gender.MALE,
			// 		});
			// 	}
			// 	await DataStore.save(nextProfile);
			// 	toast.success(__tr('profileUpdated'));
			// 	dispatch(setUserProfile(nextProfile));
			// 	let currentUser = await Auth.currentAuthenticatedUser();
			// 	await Auth.updateUserAttributes(currentUser, {
			// 		name: nextProfile?.name,
			// 		email: nextProfile?.uid,
			// 		website: nextProfile.website,
			// 		phone_number: data.phone.replace(' ', ''), ///remove space in phone number to prevent wrong phone number format in cognito
			// 	});
			// 	await (dispatch(fetchCognitoUser()) as unknown as Promise<any>);
			// } catch (error: any) {
			// 	console.log(error);
			// 	toast.warn(error.message);
			// } finally {
			// 	setBusy(false);
			// }
		},
		[dispatch, profile, phonePrefix, user.sub]
	);

	return (
		<Box>
			<Box component='form' onSubmit={onSubmit}>
				<Hidden mdUp>
					<div>
						<Grid container>
							<Grid xs={4}>
								<IconButton aria-label='Back Arrow' style={{ paddingTop: 0 }}>
									<KeyboardBackspaceIcon />
								</IconButton>
							</Grid>
							<Grid xs={4}>
								<Typography variant='body2' className={styles.value}>
									Edit Profile
								</Typography>
							</Grid>
							<Grid xs={4}>
								<Typography
									variant='body2'
									color='primary'
									style={{ paddingLeft: '66px' }}
								>
									Done
								</Typography>
							</Grid>
							<Grid xs={12}>
								<Box
									display='flex'
									justifyContent='center'
									alignItems='center'
									alignContent='center'
									paddingBottom='20px'
								>
									<Avatar className={styles.avtar} />
								</Box>
							</Grid>
						</Grid>
						<Divider style={{ margin: '15px 0px' }} />
					</div>
				</Hidden>
				<Grid container justifyContent='center' alignItems='center' spacing={2}>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('name')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							type='text'
							fullWidth
							variant='outlined'
							name='uname'
							defaultValue={profile?.name || user.name}
							error={errors.name}
							helperText={errors.name}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('username')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							type='text'
							fullWidth
							variant='outlined'
							name='username'
							defaultValue={'profile?.username'}
							error={errors.username}
							helperText={errors.username}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('bio')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							type='text'
							fullWidth
							variant='outlined'
							name='bio'
							error={errors.bio}
							helperText={errors.bio}
						/>
					</Grid>
					<Hidden mdUp>
						<Grid xs={12}>
							<Typography
								variant='body2'
								style={{ fontWeight: 600, color: 'black' }}
							>
								Personal Information
							</Typography>
						</Grid>
					</Hidden>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('website')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							type='text'
							fullWidth
							variant='outlined'
							name='website'
							defaultValue={profile?.website}
							error={errors.website}
							helperText={errors.website}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('email')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							fullWidth
							variant='outlined'
							name='email'
							defaultValue={profile?.uid || user.email}
							error={errors.email}
							helperText={errors.email}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('phoneNumber')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<PhoneField
							name='phone'
							fullWidth
							size='small'
							variant='outlined'
							error={errors.phone}
							helperText={errors.phone}
							onPrefixChange={setPhonePrefix}
							prefix={phonePrefix}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('gender')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<TextField
							size='small'
							select
							fullWidth
							variant='outlined'
							name='gender'
							defaultValue={Gender.MALE}
						>
							<MenuItem value={Gender.MALE}>{__tr('male')}</MenuItem>
							<MenuItem value={Gender.FEMALE}>{__tr('female')}</MenuItem>
							<MenuItem value={Gender.OTHERS}>{__tr('others')}</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('dob')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<TextField
							size='small'
							type='date'
							fullWidth
							variant='outlined'
							name='dob'
							error={errors.dob}
							helperText={errors.dob}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('interests')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							fullWidth
							variant='outlined'
							name='interests'
							error={errors.interests}
							helperText={errors.interests}
						/>
					</Grid>
					<Grid item xs={3}>
						<Box>
							<InputLabel>{__tr('language')}</InputLabel>
						</Box>
					</Grid>
					<Grid item xs={9}>
						<TextField
							size='small'
							fullWidth
							variant='outlined'
							name='language'
							error={errors.language}
							helperText={errors.language}
						/>
					</Grid>
				</Grid>
				<Hidden smDown>
					<Box
						margin={2}
						display='flex'
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
					>
						<CustomizedBtn
							type='submit'
							variant='contained'
							color='primary'
							size='large'
							disableElevation
							disabled={busy}
						>
							{__tr('save')}
						</CustomizedBtn>
					</Box>
				</Hidden>
			</Box>
			<Box>
				<Hidden mdUp>
					<ContentRow>
						<Typography variant='body1' style={{ fontWeight: 600 }}>
							Change Password
						</Typography>
						<Typography
							variant='body2'
							color='primary'
							className={styles.value}
						>
							Forget Password
						</Typography>
					</ContentRow>
					<EditPassword />
				</Hidden>
			</Box>
		</Box>
	);
}
