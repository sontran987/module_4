import axios from "axios";

axios.defaults.baseURL='http://localhost:8080';
export async function getList(){
    const res = await axios.get('/nhac'); 
    return res.data;
   
}
export async function addNhac(nhac){
    await axios.post('/nhac',nhac)
}