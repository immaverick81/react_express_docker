import { combineReducers } from 'redux';
import auth from '../reducers/AuthReducer';
import message from '../reducers/MessageReducer';

const rootReducer = combineReducers({
    auth,
    message
});
export default rootReducer;