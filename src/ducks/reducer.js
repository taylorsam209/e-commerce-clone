import axios from "axios";

const initialState = {
    user: false,
    products: []
}

const FULFILLED = "_FULFILLED";
const GET_USER="GET_USER";
const GET_PRODUCTS = 'GET_PRODUCTS';

export function getCurrentUser() {
    let user = axios.get('/auth/user').then(response => {
        return response.data
    })
    return {
        type: GET_USER,
        payload: user
    }
}

export function getProducts() {
    let products = axios.get('/api/products').then(products => products.data)
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER + FULFILLED:
        return Object.assign({}, state, {user: action.payload})
        case GET_PRODUCTS + FULFILLED:
        return Object.assign({}, state, {products: action.payload})
        default:
        return state;
    }
}