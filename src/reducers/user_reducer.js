import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    name: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { ...state, auth: true, name: action.name }
        case types.SIGN_OUT:
            return { ...DEFAULT_STATE }
        default:
            return state;
    }
}