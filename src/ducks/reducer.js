import axios from "axios";

const initialState = {
    user: false
}

const FULFILLED = "_FULFILLED";
const GET_USER="GET_USER";

export function getCurrentUser() {
    let user = axios.get('/auth/user').then(response => {
        console.log("reducer", response.data);
        return response.data
    })
    return {
        type: GET_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER + FULFILLED:
        return Object.assign({}, state, {user: action.payload})
        default:
        return state;
    }
}