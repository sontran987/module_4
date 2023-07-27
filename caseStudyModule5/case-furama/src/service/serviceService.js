import axios from 'axios'
axios.defaults.baseURL='http://localhost:8080'

export async function getService() {
    const res = await axios.get('/service')
    return res.data;
};
export async function createService(service){
    await axios.post('/service',service);
}