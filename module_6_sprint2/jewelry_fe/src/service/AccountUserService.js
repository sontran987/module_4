import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"

export async function login(account){
    const res = await axios.post("/api/account/login",account);
    return res.data;
}
export async function logOut(){
    const res = await axios.get("/api/account/logoutSuccessful");
    return res;
}
export const axiosClient = () => {
    axios.interceptors.request.use(async (config) => {
        const accessToken = localStorage.getItem("jwt");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        // console.log("truoc khi xuong server")
        return config;
    })


}