import axios from "axios"

export async function getStaticProps(){
    const res = await axios.get('http://localhost:8080/information');
   return res.data;
}