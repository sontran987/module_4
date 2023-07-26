import axios from "axios";

export async function getCustomer(){
    const res = await axios.get('http://localhost:8080/customer');
    return res.data;
}