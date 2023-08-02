import axios from "axios";
axios.defaults.baseURL='http://localhost:8080'
export async function getCustomer(){
    const res = await axios.get('/customer');
    return res;
}
export async function createCustomer(customer){
    await axios.post('/customer',customer);
}
export async function findByIdCustomer(id){
    const res = await axios.get('/customer/'+ id);
    return res.data;
}
export async function deleteCustomer(id){
    await axios.delete('/customer/'+id);
}
export async function updateCustomer(customer){
    await axios.put('/customer/'+customer.id,customer);
}