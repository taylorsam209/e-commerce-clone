import axios from "axios";

const initialState = {
    user: false,
    products: [],
    cart: []
}

const FULFILLED = "_FULFILLED";
const GET_USER="GET_USER";
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';

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

export function addToCart(product) {
    console.log('product', product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export default function reducer(state = initialState, action) {
    const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.product_id !== item.product_id)
    switch(action.type) {
        case GET_USER + FULFILLED:
        return Object.assign({}, state, {user: action.payload})
        case GET_PRODUCTS + FULFILLED:
        return Object.assign({}, state, {products: action.payload})
        case 'ADD_TO_CART':
        const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.product_id === item.product_id)[0]
        const addToCart = (cart, item) => {
            const cartItem = itemInCart(cart, item);
            console.log('item in cart', cartItem)
            return cartItem === undefined ? Object.assign({}, state, {cart:[...cartWithoutItem(cart, item), { ...item, quantity: 1 }] })
            : Object.assign({}, state, {cart: [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }] })    
        }
        return addToCart(state.cart, action.payload)
        // let newCart = [...state.cart, action.payload]
        // return Object.assign({}, state, {cart: newCart} )
        default:
        return state;
    }
}