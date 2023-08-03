import axios from "axios";

axios.defaults.baseURL='http://localhost:8080';
export async function getList(page,limit){
    const res = await axios.get('/music/'+page+'/'+limit); 
    return res.data;
  
}
export async function addNhac(nhac){
    await axios.post('/music',nhac)
}
export async function updateNhac(id){
    await axios.put('/music/'+id);
}
export async function deleteMusic(id){
    await axios.delete('/music/'+id);
}
export async function searchMusic(name){
   const res = await axios.get('/search/'+name);
   return res.data;
}