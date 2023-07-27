import axios from "axios";
axios.defaults.baseURL='http://localhost:8080';

export async function getTypeCustomer(){
    return await axios.get('/typeCustomer').data;
}
export async function findByIdTypeCustomer(id){
    return (await axios.get('/typeCustomer/'+id)).data;
}