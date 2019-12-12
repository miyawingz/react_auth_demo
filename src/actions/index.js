import types from './types';

export const userSignIn = () => {
    return {
        type: types.SIGN_IN,
        name: 'abc'
    }
}

export const userSignOut = () => {
    return {
        type: types.SIGN_OUT
    }
}

export const userSignUp = () => {
    return {
        type: types.SIGN_UP,
        name: 'abc'
    }
}

