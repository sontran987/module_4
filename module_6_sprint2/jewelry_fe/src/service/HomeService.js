import axios from "axios";


axios.defaults.baseURL = "http://localhost:8080"


export async function getAllProduct(page, limit, sort, arrangement, trademark, material, typeProduct) {
    const res = await axios.get("/api/product/get-all", {
        params: {
            page:page,
            limit:limit,
            sort:sort,
            arrangement:arrangement,
            trademark:trademark,
            material:material,
            typeProduct:typeProduct
        }
    });
    return res.data;

}
