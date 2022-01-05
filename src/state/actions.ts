import { IGlobalActions } from './actions/globalActions';
import { IUserActions } from './actions/userActions';

export type IAction = IUserActions | IGlobalActions;
