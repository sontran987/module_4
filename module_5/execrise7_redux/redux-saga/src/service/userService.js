import axios from 'axios'
axios.defaults.baseURL='http://localhost:8080';

export async function GetUsers(){
    const res = await axios.get('/user');
    return res.data;
}
export async function DeleteUsers(id){
    await axios.delete('/user/' + id);
}