import { useContext, useEffect } from 'react';
import { PropsWithChildren } from 'react';
import {} from 'amazon-cognito-identity-js';
import { useHistory } from 'react-router';
import UserContext from '../../contexts/UserContext';

export function RouteProtector(props: PropsWithChildren<{}>) {
	const { user } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		console.log(user);
		if (!user || !user.name) {
			history.replace(`/auth/login`);
		}
	}, [user, history]);

	return <>{user && props.children}</>;
}
