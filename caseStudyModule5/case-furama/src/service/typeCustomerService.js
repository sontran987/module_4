import axios from "axios";
axios.defaults.baseURL='http://localhost:8080';

export async function getTypeCustomer(){
    const res = await axios.get('/typeCustomer');
    return res.data;
}
export async function findByIdTypeCustomer(id){
    const res = await axios.get('/typeCustomer/'+id);
    return res.data;
}