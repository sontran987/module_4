import axios from "axios";
axios.defaults.baseURL='http://localhost:8080'
export async function getCustomer(){
    const res = await axios.get('/customer');
    return res;
}
export async function createCustomer(customer){
    await axios.post('/customer'+ customer);
}