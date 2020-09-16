import { combineReducers } from 'redux';
import ordenes from './ordenReducer';

export default combineReducers({
    ordenes: ordenes
});