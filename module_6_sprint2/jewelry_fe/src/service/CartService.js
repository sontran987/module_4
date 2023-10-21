import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export async function getAllCartOrder(id) {
    const res = await axios.get("/api/order/get-all", {
        params: {
            userId: id
        }
    });
    return res.data;
}
export async function getUserInformation(id) {
    const res = await axios.get("/api/order/user-information", {
        params: {
            id: id
        }
    });
    return res.data;
}

export async function updateQuantityProduct(quantity, cartId) {
    await axios.post("/api/order/update-quantity?cartId=" + cartId + "&quantity=" + quantity);
}

export async function deleteOrderById(id) {
    await axios.delete("/api/order/delete-by-id", {
        params: {
            id: id
        }
    })
}

export async function checkQuantityProduct(userid){
    const message = await axios.get("/api/order/check-quantity",{params:{
            userId:userid
        }});
    console.log(message);
    return message;
}