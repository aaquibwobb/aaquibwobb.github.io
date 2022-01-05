import { createContext } from 'react';
import { User } from '../models';

let defaultUser: User = {
	id: '',
	name: '',
	email: '',
	uid: '',
	role: 'INFLUENCER',
};

const UserContext = createContext({
	user: defaultUser,
	setUser: (user: User) => {},
});

export default UserContext;
