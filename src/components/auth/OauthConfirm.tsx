import { Box } from '@material-ui/core';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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

export function OauthSignup() {
	const [emailOrPhone, setEmailOrPhone] = useState('');
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
		},
		[password]
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
							<span className={styles.name}>John Deco</span>
						</div>
						<div className={styles.content}>
							<span className={styles.email}>john@sample.com</span>
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
						<button type='submit' className={styles.btnSubmit}>
							<span className={styles.text}>
								{__tr('confirmPasswordForOauth')}
							</span>
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
							<div className={styles.text}>{__tr('or')}</div>
						</div>
					</Box>
				</form>
			</div>
		</div>
	);
}
