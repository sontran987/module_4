import axios from "axios";

export async function createNewOrder(userId, note, cartIDs) {
    try {
        // const reqBody = JSON.stringify({
        //     cartIDs: cartIDs
        // });
        const res = await axios.post(`http://localhost:8080/api/order/create-order-user?userId=${userId}&note=${note}&reqbody=${cartIDs}`);
        console.log(res);
        return res;
    } catch (error) {
        console.error(`error in createOrder: ${error}`);
    }
}

export async function getAllOrderHistory(userId) {
    const res = await axios.get("http://localhost:8080/api/order/history", {
        params: {
            userId: userId
        }
    });
    return res
}
export async function getAllOrderDate(userId) {
    const res = await axios.get("http://localhost:8080/api/order/check-date", {
        params: {
            userId: userId
        }
    });
    return res;
}