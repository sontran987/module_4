import Anh3 from "../img/bo_trang_suc.jpg";
import Anh1 from "../img/quang-cao-nhan.jpg";
import Anh2 from "../img/nhan-quang-cao.jpg";
import Header from '../components/Header';
import Footer from "../components/Footer";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/animate/animate.min.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllProduct} from "../service/HomeService";
import Swal from "sweetalert2";

export default function Home() {
    const limit = 4;
    const [pageList, setPageList] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [products, setProduct] = useState([]);
    const [searchProduct, setSearchProduct] = useState(
        {
            typeProduct: null,
            trademark: null,
            material: null,
        }
    );
    const [sortProduct, setSortProduct] = useState(
        {
            arrangement: 0,
            sort: "price"
        }
    );
    const [isLoading, setIsLoading] = useState(false);
    const handleScroll = () => {
        // Kiểm tra xem người dùng đã cuộn đến cuối trang hay chưa
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        if ((scrollTop + clientHeight >= scrollHeight - 600) && pageList < totalPage) {
            setPageList((prev) => prev + 1); // Tăng giá trị của page để lấy trang tiếp theo
        }
    };
    useEffect(() => {
        document.title = 'Jewelry - Home'
        document.documentElement.scrollTop = 0;
    }, [])
    useEffect(() => {
        // fetchData(); // Lấy dữ liệu ban đầu khi component được render
        window.addEventListener("scroll", handleScroll); // Thêm event listener cho sự kiện scroll
        return () => {
            window.removeEventListener("scroll", handleScroll); // Loại bỏ event listener khi component bị unmount
        };
    }, [pageList, totalPage]);
    useEffect(() => {
        fetchData(); // Lấy dữ liệu khi page thay đổi
    }, [pageList]);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProduct(pageList, limit,
                sortProduct.sort, sortProduct.arrangement,
                searchProduct.trademark, searchProduct.material,
                searchProduct.typeProduct);
            setProduct([...products, ...data.content]);
            setPageList(data.pageable.pageNumber);
            setTotalPage(data.totalPages);
            setIsLoading(false);
            console.log(data)
        } catch (error) {
            await Swal.fire({
                icon: 'warning',
                title: 'No data found.',
                showConfirmButton: false,
                timer: 2000
            })
            setProduct([]);
            setTotalPage(0);
            setPageList(0);
            setIsLoading(false);
        }

    }

    return (
        <>

            <Header/>
            {/* carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Anh3} className="d-block w-100 imgs" alt="..." width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh1} className="d-block w-100 imgs" alt="..." width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh2} className="d-block w-100 imgs" alt="..." width={100} height={500}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Product */}
            <div>
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s"
                             style={{maxWidth: "600px"}}>
                            <h1 className="text-primary mb-3">Welcome to our product area</h1>
                            <p className="mb-5">Here we will provide you with quality products that show your
                                nobility</p>
                        </div>
                        {/* search */}
                        <div className="px-2 justify-content-between d-flex">
                            <div>
                                <p className="px-2 m-0"> Bộ lọc:</p>
                                <select className="search-product">

                                </select>
                                <input type={"text"} className="search-product" placeholder="chất liệu"/>
                                <input type={"search"} className="search-product" placeholder="loại trang sức"/>
                            </div>
                            <div>
                                <p className="px-2 m-0"> Sắp xếp:</p>
                                <select value="" className="search-product">
                                    <option value={JSON.stringify({sortEmployee: "code_employee", ways: "ASC"})} >Choose type sort</option>
                                    <option value={"1"} >Choose type sort</option>
                                </select>
                            </div>
                        </div>
                        <div className="row g-4">
                            {products.map((product, index) => (
                                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                    <div className="product-item text-center border h-100 p-2">
                                        <Link to="/detail">
                                            <img className=" img-cards" src={product.imageProduct}
                                                 alt={product.nameProduct}/>

                                            <p className="h6 d-inline-block mb-2 mt-3">{product.nameProduct}</p>
                                            <h5 className="text-primary mb-3">${product.price}</h5>
                                        </Link>
                                        <button className="btn btn-outline-primary px-3">Add To Cart</button>
                                    </div>
                                </div>
                            ))}


                            <div className="col-12 text-center">
                                {/*<a className="btn btn-primary py-2 px-4" href="">Load More Products</a>*/}
                                {isLoading && <p>Loading...</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}