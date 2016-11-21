import { combineReducers } from 'redux';
import routes from './routes';
import doodle from './doodle';
import firebaseDoodle from './firebase-doodle';

export default combineReducers({
    routes, doodle, firebaseDoodle
});
