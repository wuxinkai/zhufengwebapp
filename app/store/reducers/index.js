import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {favorite} from './favorite';
export default combineReducers({userInfo,favorite})