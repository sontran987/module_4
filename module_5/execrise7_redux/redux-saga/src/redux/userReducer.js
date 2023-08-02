const initialValue = {
    users: []

}
export const cartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'USER_LIST':
            console.log(action.payload);
            return { ...state, users: action.payload }
        case 'DELETE_USER':
            return { ...state, users: action.payload }
        default:
            return state;

    }

}