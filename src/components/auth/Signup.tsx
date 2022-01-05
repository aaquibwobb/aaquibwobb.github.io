import { Box } from '@material-ui/core';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { EmailOrPhone } from '../ui/EmailOrPhone';
import { IconGoogle } from '../ui/Icons';
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
import { UserRole } from '../../models';

export function Signup() {
	const [socialModeEnabled, setSocialModeEnabled] = useState(false);
	const [emailOrPhone, setEmailOrPhone] = useState('');
	const [selectedRole, setSelectedRole] = useState<string>(UserRole.INFLUENCER);
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<any>({});
	const [loading, setLoading] = useState(false);

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

			if (!socialModeEnabled) {
				let data = {
					email: Validators.isEmail(emailOrPhone) ? emailOrPhone : '',
					phone_number: Validators.isPhone(emailOrPhone) ? emailOrPhone : '',
					password: form.password.value,
					name: form.fullName.value,
					role: selectedRole,
				};

				if (!data.email && !data.phone_number) {
					newErrors.emailOrPhone = __tr('errorInvalidEmailOrPhone');
				}

				if (!Validators.isValidPassword(data.password)) {
					newErrors.password = __tr('errorInvalidPassword');
				}

				if (!Validators.isValidName(data.name)) {
					newErrors.name = __tr('errorInvalidName');
				}

				if (Object.keys(newErrors).length === 0) {
					setLoading(true);
					Auth.signUp({
						username: data.email,
						password: data.password,
						attributes: {
							email: data.email,
							phone_number: data.phone_number,
							name: data.name,
							'custom:userRole': data.role,
						},
					})
						.then(result => {
							persistUname(result.user.getUsername());
							history.push(Routes.VerifyOTP);
						})
						.catch(err => {
							toast.error(err.message);
						})
						.finally(() => {
							setLoading(false);
						});
				}
			}
			setErrors(newErrors);
		},
		[socialModeEnabled, emailOrPhone, selectedRole, loading, history]
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
					{socialModeEnabled && (
						<div className={styles.socialAccount}>
							<div className={styles.header}>
								<span className={styles.name}>John Deco</span>
								<button
									className={styles.btnNotYou}
									onClick={() => setSocialModeEnabled(false)}
								>
									{__tr('btnNotYou')}
								</button>
							</div>
							<div className={styles.content}>
								<span className={styles.email}>john@sample.com</span>
							</div>
						</div>
					)}
					{!socialModeEnabled && (
						<Box marginY={2}>
							<EmailOrPhone
								label={__tr('labelEmailOrPassword')}
								placeholder='johndoe@company.tld'
								onChange={val => setEmailOrPhone(val.value)}
								error={errors.emailOrPhone}
							/>
						</Box>
					)}
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
					{!socialModeEnabled && (
						<Box marginY={2}>
							<SingleLineInput
								label={__tr('labelName')}
								type='text'
								name='fullName'
								placeholder='John'
								error={errors.label}
							/>
						</Box>
					)}
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
					<Box
						marginY={4}
						display='flex'
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
					>
						<div className={styles.lined}>
							<div className={styles.text}>{__tr('or')}</div>
						</div>
					</Box>
					{!socialModeEnabled && (
						<Box marginY={2}>
							<button
								type='button'
								onClick={() => setSocialModeEnabled(true)}
								className={styles.googleSignup}
							>
								<span className={styles.icon}>
									<IconGoogle size={24} />
								</span>
								<span className={styles.text}>{__tr('joinWithGoogle')}</span>
							</button>
						</Box>
					)}
					<Box
						marginY={2}
						display='flex'
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
					>
						<span className={styles.callToSignup}>{__tr('alreadyMember')}</span>
						<Link to={Routes.Login} className={styles.signinLink}>
							{__tr('btnSignin')}
						</Link>
					</Box>
				</form>
			</div>
		</div>
	);
}