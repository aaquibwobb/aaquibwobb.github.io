import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import { Logo } from '../ui/Logo';
import { Routes } from '../../routes';
import styles from '../../styles/AuthLayout.module.scss';
import { ConfirmOTP } from './ConfirmOTP';
import { ForgotPassword } from './ForgotPassword';
import Login from './Login';
import { Signup } from './Signup';
import LoginPassword from './LoginPassword';
import { useContext, useEffect } from 'react';
import { Hub } from 'aws-amplify';
import { OauthSignup } from './OauthSignup';
import OauthLand from './OauthLand';

export function AuthLayout() {
	return (
		<div className={styles.page}>
			<Container className={styles.routes}>
				<a href='/' className={styles.authHeader}>
					<Logo size={128} />
				</a>
				<div className={styles.content}>
					<Switch>
						<Route path={Routes.LoginPassword}>
							<div className={styles.loginComponent}>
								<LoginPassword />
							</div>
						</Route>
						<Route path={Routes.Login}>
							<div className={styles.loginComponent}>
								<Login />
							</div>
						</Route>
						<Route path={Routes.VerifyOTP}>
							<div className={styles.loginComponent}>
								<ConfirmOTP />
							</div>
						</Route>
						<Route path={Routes.Signup} exact>
							<div className={styles.loginComponent}>
								<Signup />
							</div>
						</Route>
						<Route path={Routes.OauthSignup} exact>
							<div className={styles.loginComponent}>
								<OauthSignup />
							</div>
						</Route>
						<Route path={Routes.OauthLand}>
							<div className={styles.loginComponent}>
								<OauthLand />
							</div>
						</Route>
						<Route path={Routes.ForgotPassword}>
							<div className={styles.loginComponent}>
								<ForgotPassword />
							</div>
						</Route>
						<Route path={Routes.Auth}>
							<Redirect to={Routes.Login} />
						</Route>
					</Switch>
				</div>
			</Container>
		</div>
	);
}
