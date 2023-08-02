import axios from 'axios'
axios.defaults.baseURL='http://localhost:8080'

export async function getService() {
    const res = await axios.get('/service')
    return res.data;
};
export async function createService(service){
    await axios.post('/service',service);
}
export async function findByIdService(id){
    const res = await axios.get('/service/'+id);
    return res.data;
}
export async function updateService(service){
    await axios.put('/service/'+service.id,service)
}
export async function deleteService(id) {
    await axios.delete('/service/'+id);
}