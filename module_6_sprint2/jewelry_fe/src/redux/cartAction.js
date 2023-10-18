import {getAllCartOrder} from "../service/CartService";
import {findDetailProduct} from "../service/DetailProductService";

export const getAllCart = (userId) => async (dispatch) => {
    try {
        const data = await getAllCartOrder(userId);
        dispatch({
            type: "GET_ALL_CART",
            payload: data
        });
    }catch (error){
        console.log(error);
    }
}
export const getProduct = (productId) => async (dispatch) =>{
    try {
        const data = await findDetailProduct(productId);
        dispatch({
            type:"GET_ALL_PRODUCT",
            payload:data
        });
    }catch (error){
        console.log(error);
    }
}
