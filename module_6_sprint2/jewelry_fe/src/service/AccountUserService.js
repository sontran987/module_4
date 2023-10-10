import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export async function login(account){
    const res = await axios.post("/api/account/login",account);
    return res.data;
}