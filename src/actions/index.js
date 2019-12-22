import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";

export function userSignIn(credentials) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`${BASE_URL}/signin`, credentials);
            localStorage.setItem('auth-token', data.token);
            dispatch({
                type: types.SIGN_IN
            })
        }
        catch (error) {
            console.log('fail sign in', error)
        }
    }
}

export const userSignOut = () => {
    localStorage.removeItem('auth-token');
    return {
        type: types.SIGN_OUT
    }
}

export const userSignUp = userData => async dispatch => {
    try {
        const { data } = await axios.post(`${BASE_URL}/signup`, userData);
        localStorage.setItem('auth-token', data.token);
        dispatch({
            type: types.SIGN_UP
        })
    }

    catch (error) {
        console.error('fail sign up', error)
    }
}

// export function getMovieQuote() {
//     return async function (dispatch) {
//         try {

//         }
//         catch (error) {
//             console.log('fail get movie quote', error)
//         }
//     }
// }
export const getMovieQuote = () => async dispatch => {
    try {
        const token = localStorage.getItem('auth-token');
        if (!token) {
            throw new Error('missing auth token');
        }

        const { data } = await axios.get(BASE_URL, {
            headers: {
                authorization: token
            }
        })

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            quote: data.message
        })

        console.log('get quote', data);
    }
    catch (error) {
        console.log('fail get movie quote', error);
    }
}