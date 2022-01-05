import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import { Routes } from '../../routes';

const OauthLand = () => {
	const history = useHistory();
	let userName = localStorage.getItem('userName');
	const { user, setUser } = useContext(UserContext);
	const handleOauthDisaster = async (userName: string) => {
		const callToCheckUser = await axios.get(
			'https://4vihhvy6b9.execute-api.ap-south-1.amazonaws.com/items/' +
				userName
		);
		const {
			Item: { isUserAlreadyExisting, email, name, password },
		} = callToCheckUser.data;
		setUser({ ...user, email, name });
		localStorage.removeItem('userName');
		localStorage.setItem('pwd', password);
		history.push(
			isUserAlreadyExisting ? Routes.OauthConfirm : Routes.OauthSignup
		);
	};

	useEffect(() => {
		console.log(userName);
		if (userName) handleOauthDisaster(userName);
		else {
			setTimeout(() => {
				userName = localStorage.getItem('userName');
				console.log(userName);
			}, 250);
		}
	}, [userName]);

	return <div />;
};

export default OauthLand;
