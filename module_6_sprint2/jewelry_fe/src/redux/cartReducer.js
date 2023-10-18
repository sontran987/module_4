const initialValue = {
    product:[],
    cart: []
}
export default function cartRedux(state = initialValue, action) {
    switch (action.type) {
        case 'GET_ALL_CART':
            return {...state, cart: action.payload}
        case 'GET_ALL_PRODUCT':
            return {...state, product: action.payload}
        default:
            return state;
    }
}