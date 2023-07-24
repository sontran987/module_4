import axios from 'axios'
export async function getBook(){
    const res = await axios.get('http://localhost:8080/book');
    return res.data;
}