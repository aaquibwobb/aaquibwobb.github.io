import { Box } from '@material-ui/core';
import {
	ChangeEvent,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RoleInputField } from '../ui/RoleInputField';
import { SingleLineInput } from '../ui/SingleLineInput';
import { Validators } from '../../core/validators';
import { __tr } from '../../i18n';
import { Routes } from '../../routes';
import styles from '../../styles/Signup.module.scss';
import { toast } from 'react-toastify';
import { Loader } from '../ui/Loader';
import Auth from '@aws-amplify/auth';
import { persistUname } from '../../core/utils';
import UserContext from '../../contexts/UserContext';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { UserRole } from '../../API';

export function OauthSignup() {
	const [emailOrPhone, setEmailOrPhone] = useState('');
	const [selectedRole, setSelectedRole] = useState<string>(UserRole.INFLUENCER);
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<any>({});
	const [loading, setLoading] = useState(false);
	const { user, setUser } = useContext(UserContext);
	const currentPassword = localStorage.getItem('pwd');

	useEffect(() => {}, []);

	const history = useHistory();

	const onFormChange = useCallback((ev: ChangeEvent<HTMLFormElement>) => {
		setErrors({});
		setLoading(false);
	}, []);

	const onSubmit = useCallback(
		(ev: ChangeEvent<HTMLFormElement>) => {
			ev.preventDefault();

			if (loading) {
				/// does nothing if there is an ongoing action
				return;
			}

			let form = ev.currentTarget;
			let newErrors: any = {};

			let data = {
				password: form.password.value,
				role: selectedRole,
			};

			if (!Validators.isValidPassword(data.password)) {
				newErrors.password = __tr('errorInvalidPassword');
			}

			if (Object.keys(newErrors).length === 0) {
				setLoading(true);
				Auth.signIn(
					user.email ? user.email : '',
					currentPassword ? currentPassword : ''
				)
					.then(userCognito => {
						if (userCognito.challengeName === 'NEW_PASSWORD_REQUIRED') {
							Auth.completeNewPassword(userCognito, data.password, {
								'custom:userRole': data.role.toUpperCase(),
								name: user.name,
							})
								.then(async user => {
									await API.graphql({
										query: mutations.updateUser,
										variables: {
											input: {
												id: user.username,
												role: data.role,
											},
										},
									});
									setLoading(false);
									return history.replace(Routes.Home);
								})
								.catch(e => {
									console.log(e);
								});
						}
					})
					.catch(e => {
						console.log(e);
					});
			}
			setErrors(newErrors);
		},
		[selectedRole, loading, history, user]
	);
	return (
		<div className={styles.loginWrapper}>
			<h3>{__tr('welcomeToWobb')}</h3>
			<div className={styles.formWrapper}>
				<h3>{__tr('signup')}</h3>
				{loading && <Loader />}
				<form
					onChange={onFormChange}
					action=''
					className={styles.form}
					onSubmit={onSubmit}
				>
					<div className={styles.socialAccount}>
						<div className={styles.header}>
							<span className={styles.name}>{user.name}</span>
						</div>
						<div className={styles.content}>
							<span className={styles.email}>{user.email}</span>
						</div>
					</div>

					<Box marginY={2}>
						<SingleLineInput
							label={__tr('labelCreatePassword')}
							type='password'
							name='password'
							placeholder={__tr('placeholderSignupPassword')}
							inputProps={{
								onChange: ev => setPassword(ev.currentTarget.value),
								value: password,
							}}
							error={errors.password}
						/>
					</Box>
					<Box marginY={2}>
						<RoleInputField
							label={__tr('labelSelectRole')}
							value={selectedRole}
							onChange={setSelectedRole}
						/>
					</Box>
					<Box marginY={2}>
						<p className={styles.textAcceptTerms}>
							{__tr('byRegistering')}, {__tr('IAgreeTo')}
							<Link to={Routes.TermsAndCondition} className={styles.link}>
								{__tr('termsAndConditions')}
							</Link>
							{__tr('and')}
							<Link to={Routes.PrivacyPolicies} className={styles.link}>
								{__tr('privacyPolicies')}
							</Link>
						</p>
					</Box>
					{!loading && (
						<Box marginY={2}>
							<button type='submit' className={styles.btnSubmit}>
								<span className={styles.text}>{__tr('btnAgreeAndJoin')}</span>
							</button>
						</Box>
					)}
				</form>
			</div>
		</div>
	);
}
