import axios from 'axios'

export async function getService() {
    const res = await axios.get('http://localhost:8080/service')
    return res.data
}