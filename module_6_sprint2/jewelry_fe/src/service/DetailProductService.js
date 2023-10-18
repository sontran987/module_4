import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export async function findDetailProduct(id) {
    const res = await axios.get("/api/product/get-detail-product", {
        params: {
            id: id
        }
    });
    return res.data;
}
export async function getSize(){
    const res = await axios.get("/api/product/get-size");
    return res.data;
}
export async function addToCart(cart){
    try {
        await axios.post("/api/order/add-to-cart",cart);
    }catch (error){
        console.log(error);
    }

}