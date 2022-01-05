import { Box } from '@material-ui/core';
import { CognitoUser } from 'amazon-cognito-identity-js';
import React, { useCallback, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { EmailOrPhone } from '../ui/EmailOrPhone';
import { IconGoogle } from '../ui/Icons';
import { Loader } from '../ui/Loader';
import { SingleLineInput } from '../ui/SingleLineInput';
import { useUrlQuery } from '../../core/hooks';
import { Validators } from '../../core/validators';
import { __tr } from '../../i18n';
import { Routes } from '../../routes';
import { IAppState } from '../../state';
import { initializeState } from '../../state/middlewares';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

import styles from '../../styles/Login.module.scss';
import { useEffect } from 'react';
import UserContext from '../../contexts/UserContext';

const mapState = (state: IAppState) => {
	return {
		user: state.userState.user,
	};
};

const mapDispatch = (dispatch: ThunkDispatch<IAppState, {}, AnyAction>) => {
	return {
		initialize: () => dispatch(initializeState()),
	};
};

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;

function Login(props: Props) {
	const [loading, setLoading] = useState(false);
	const [emailOrPhone, setEmailOrPhone] = useState('');
	const [errors, setErrors] = useState<any>({});
	const { user, setUser } = useContext(UserContext);

	const history = useHistory();
	const nextSegment = useUrlQuery('next', '');

	const onSubmit = useCallback(
		async (ev: React.ChangeEvent<HTMLFormElement>) => {
			ev.preventDefault();

			let form = ev.currentTarget;
			let data = {
				emailOrPhone,
				password: form.password.value,
			};

			let errs: any = {};
			if (!Validators.isEmailOrPhone(data.emailOrPhone)) {
				errs.emailOrPhone = __tr('errorInvalidEmailOrPhone');
			}

			if (!data.password) {
				errs.password = __tr('errorInvalidPassword');
			}

			setErrors(errs);

			if (Object.keys(errs).length > 0) {
				return;
			}

			setLoading(true);
			Auth.signIn(emailOrPhone, data.password)
				.then((userData: CognitoUser) => {
					setLoading(false);
					return history.replace(Routes.Home);
				})
				.catch(err => {
					setLoading(false);
					toast.error(err.message);
				});
		},
		[emailOrPhone, history, nextSegment, props]
	);

	useEffect(() => {
		if (user && user.email) {
			history.replace(Routes.BaseCampaigns);
		}
	}, [history, props]);

	return (
		<div className={styles.loginWrapper}>
			<h3>Welcome to Wobb!</h3>
			<div className={styles.formWrapper}>
				<h3>Sign in</h3>
				<form action='' className={styles.form} onSubmit={onSubmit}>
					{loading && <Loader />}
					<Box marginY={2}>
						<EmailOrPhone
							label='Email or phone number'
							placeholder='john@example.com'
							onChange={val => setEmailOrPhone(val.value)}
							error={errors.emailOrPhone}
						/>
					</Box>
					<Box marginY={2}>
						<SingleLineInput
							label='Password'
							type='password'
							name='password'
							placeholder='Must be at least 6 characters'
							error={errors.password}
						/>
					</Box>
					<Box marginY={2}>
						<Link
							to={Routes.ForgotPassword}
							className={styles.passwordRecoveryLink}
						>
							Forgot Password ?
						</Link>
					</Box>
					<Box marginY={2}>
						<button type='submit' className={styles.btnSubmit}>
							Sign in
						</button>
					</Box>
					<Box
						marginY={4}
						display='flex'
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
					>
						<div className={styles.lined}>
							<div className={styles.text}>Or</div>
						</div>
					</Box>
					<Box marginY={2}>
						<button
							onClick={() =>
								Auth.federatedSignIn({
									provider: CognitoHostedUIIdentityProvider.Google,
								})
							}
							type='button'
							className={styles.googleSignin}
						>
							<span className={styles.icon}>
								<IconGoogle size={24} />
							</span>
							<span className={styles.text}>Continue with Google</span>
						</button>
					</Box>
					<Box
						marginY={2}
						display='flex'
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
					>
						<span className={styles.callToSignup}>New to Wobb ?</span>
						<Link to={Routes.Signup} className={styles.signupLink}>
							Sign up
						</Link>
					</Box>
				</form>
			</div>
		</div>
	);
}

export default connect(mapState, mapDispatch)(Login);