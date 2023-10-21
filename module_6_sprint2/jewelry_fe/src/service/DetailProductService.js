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

export async function getSize() {
    const res = await axios.get("/api/product/get-size");
    return res.data;
}

export async function addToCart(cart) {
    try {
        await axios.post("/api/order/add-to-cart", cart);
    } catch (error) {
        console.log(error);
    }

}

export async function addRating(rating) {
    const res = await axios.post("/api/rating/create-rating", rating);
    return res;
}

export async function getRating(productId) {
    try {
        const res = await axios.get("/api/rating/get-rating", {
            params: {
                productId: productId
            }
        });
        return res.data;
    }catch (error){
        console.log("Rating not content");
    }
}
export async function checkUserPurchase(userId,productId){
    const res = await axios.get("/api/rating/check-purchase",{params:{
            userId:userId,
            productId:productId
        }});
    return res;
}