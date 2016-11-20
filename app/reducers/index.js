import { combineReducers } from 'redux';
import routes from './routes';
import someReducer from './some-reducer';

export default combineReducers({
    routes, someReducer
});
