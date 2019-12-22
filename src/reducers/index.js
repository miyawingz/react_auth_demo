import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import quoteReducer from './quote_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    quote:quoteReducer
})

export default rootReducer;