import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Routes } from './routes';
import { AuthLayout } from './components/auth/AuthLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssVariables } from './css-variables';
import { RouteProtector } from './components/auth/RouteProtector';
import { Provider } from 'react-redux';
import { store } from './state/store';
import BaseLanding from './components/landing/pages/BaseLanding';
import Initializer from './components/ui/Initializer';
import Amplify, { API, Auth, Hub } from 'aws-amplify';
import config from './aws-exports';
import UserContext from './contexts/UserContext';
import { useEffect, useState } from 'react';
import { User } from './models';
import * as queries from './graphql/queries';

Hub.listen('auth', data => {
	const currentAuthState = data.payload.event;
	if (currentAuthState === 'cognitoHostedUI_failure') {
		try {
			const failureMessage = data.payload.data.toString() as string;
			if (
				failureMessage.indexOf('Error: Already+found+an+entry+for+username') !==
				-1
			) {
				const splitMessage = failureMessage.split('+');
				if (splitMessage.length < 2) return;
				const userName = splitMessage[splitMessage.length - 2];
				localStorage.setItem('userName', userName);
			}
		} catch (err) {}
	}
});
Amplify.configure({
	...config,
	oauth: {
		...config.oauth,
		redirectSignIn: 'http://localhost:3000/auth/oauth',
		redirectSignOut: 'http://localhost:3000/auth/oauth',
	},
	Analytics: {
		AWSPinpoint: {
			appId: config.aws_mobile_analytics_app_id,
			region: config.aws_mobile_analytics_app_region,
			endpoint: {
				optOut: 'NONE',
			},
		},
	},
});

const appTheme = createTheme({
	palette: {
		primary: {
			main: '#012FB7',
			dark: '#080C4E',
		},
		text: {
			primary: '#333333',
			secondary: '#484848',
			hint: '#646464',
			disabled: '#848484',
		},
	},
	typography: {
		fontFamily: 'Poppins',
	},
});

appTheme.shadows[1] = `1px 1px 2px ${CssVariables.colorGrayV1}`;
appTheme.shadows[2] = `1px 1px 4px ${CssVariables.colorGrayV1}`;

function App() {
	const [user, setUser] = useState<User>({
		id: '',
		name: '',
		email: '',
		uid: '',
		role: 'INFLUENCER',
		imageUrl: '',
	});

   const getUserDetail  = async () =>{

	const cognitoUser = await Auth.currentUserInfo();
	   if(cognitoUser && cognitoUser.username){
				const userData: any = await API.graphql({
					query: queries.getUser,
					variables: {
						id: cognitoUser.username,
					},
				});
				setUser(userData.data.getUser);
			}
   }

	useEffect(() => {
		getUserDetail();
		Hub.listen('auth', async data => {
			const currentAuthState = data.payload.event;
			console.log(currentAuthState);
			if (
				currentAuthState === 'signIn' ||
				currentAuthState === 'cognitoHostedUI'
			) {
				const cognitoUser = await Auth.currentUserInfo();
				const userData: any = await API.graphql({
					query: queries.getUser,
					variables: {
						id: cognitoUser.username,
					},
				});
				setUser(userData.data.getUser);
			}
		});
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Provider store={store}>
				<ThemeProvider theme={appTheme}>
					<CssBaseline />
					<BrowserRouter>
						<Initializer>
							<Switch>
								<Route path={Routes.Home}>
									<RouteProtector>
										<Home />
									</RouteProtector>
								</Route>
								<Route path={Routes.Auth}>
									<AuthLayout />
								</Route>
								<Route path={Routes.Base}>
									<BaseLanding />
								</Route>
							</Switch>
						</Initializer>
					</BrowserRouter>
					<ToastContainer
						position='bottom-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={true}
						closeOnClick={true}
						pauseOnFocusLoss
						pauseOnHover
					/>
				</ThemeProvider>
			</Provider>
		</UserContext.Provider>
	);
}

export default App;
