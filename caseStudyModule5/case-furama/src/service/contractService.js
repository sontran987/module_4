import axios from "axios";

export async function getContract(){
    const res = await axios.get('http://localhost:8080/contract');
    return res.data;
}