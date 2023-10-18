import axios from "axios";

export async function createNewOrder(userId, note, cartIDs) {
    try {
        const reqBody = JSON.stringify({
            cartIDs: cartIDs
        });
        const res = await axios.post(`http://localhost:8080/api/order/create-order-user?userId=${userId}&note=${note}`,
            reqBody,
            { headers: { "Content-Type": "application/json" } });
        console.log(res);
        return res;
    } catch (error) {
        console.error(`error in createOrder: ${error}`);
    }
}