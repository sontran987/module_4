import Anh3 from "../img/kim-cuong-trang-suc.jpg";
import Anh1 from "../img/quang-cao-nhan.jpg";
import Anh2 from "../img/nhan-quang-cao.jpg";
import BackToTop from "../img/mui_ten_len.png"
import Header from '../components/Header';
import Footer from "../components/Footer";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/animate/animate.min.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllCategory, getAllProduct, getAllSupplier, getAllTypeProduct} from "../service/HomeService";
import Swal from "sweetalert2";

export default function Home() {
    const limit = 4;
    const [pageList, setPageList] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [products, setProduct] = useState([]);
    const [categorys, setCategory] = useState([]);
    const [typeProducts, setTypeProduct] = useState([]);
    const [suppliers, setSupplier] = useState([]);
    const [showButton, setShowButton] = useState(false);

    const [searchProduct, setSearchProduct] = useState(
        {
            typeProduct: null,
            trademark: null,
            material: null,
        }
    );
    const [sortProduct, setSortProduct] = useState(
        {
            arrangement: 1,
            sort: "id"
        }
    );
    const [isLoading, setIsLoading] = useState(false);
    const checkPage = () => {
        if (pageList <= totalPage) {
            setPageList((prev) => prev + 1); // Tăng giá trị của page để lấy trang tiếp theo
        }
    }
    const handleScroll = () => {
        // Kiểm tra xem người dùng đã cuộn đến cuối trang hay chưa
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        if ((scrollTop + clientHeight >= scrollHeight - 600)) {
            checkPage();
        }
    };
    const scrollToTop = () => {
        const scrollStep = window.scrollY / (500 / 15); // Tốc độ cuộn
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };
    useEffect(() => {
        const handleScroll1 = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = 500;
            setShowButton(scrollTop > scrollThreshold);
        }
        window.addEventListener('scroll', handleScroll1);
        return () => {
            window.removeEventListener('scroll', handleScroll1);
        }
    }, []);
    useEffect(() => {
        document.title = 'Jewelry - Home'
        window.scrollTo(0, 0);
        getDataSearchCategory().then();
        getDataSearchtypeProduct(0).then();
        getDataSearchSupplier().then();
    }, [])
    useEffect(() => {
        // fetchData().then(); // Lấy dữ liệu ban đầu khi component được render
        window.addEventListener("scroll", handleScroll); // Thêm event listener cho sự kiện scroll
        return () => {
            window.removeEventListener("scroll", handleScroll); // Loại bỏ event listener khi component bị unmount
        };
    }, [handleScroll]);
    useEffect(() => {

        fetchData().then(); // Lấy dữ liệu khi page, sort, search thay đổi
        window.addEventListener("scroll", handleScroll); // Thêm event listener cho sự kiện scroll
        return () => {
            window.removeEventListener("scroll", handleScroll); // Loại bỏ event listener khi component bị unmount
        };
    }, [pageList,
        sortProduct.arrangement,
        sortProduct.sort,
        searchProduct.typeProduct,
        searchProduct.material,
        searchProduct.trademark]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProduct(pageList, limit,
                sortProduct.sort, sortProduct.arrangement,
                searchProduct.trademark, searchProduct.material,
                searchProduct.typeProduct);
            setProduct([...products, ...data.content]);
            // setPageList(data.pageable.pageNumber);
            setTotalPage(data.totalPages);
            setIsLoading(false);
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
    const getDataSearchCategory = async () => {
        try {
            const data = await getAllCategory();
            setCategory(data);
        } catch (error) {
            console.log("khong co du lieu cho category");
        }
    }
    const getDataSearchtypeProduct = async () => {
        try {
            const data = await getAllTypeProduct();
            setTypeProduct(data);
        } catch (error) {
            console.log("khong co du lieu cho type product")
        }

    }
    const getDataSearchSupplier = async () => {
        try {
            const data = await getAllSupplier();
            setSupplier(data);
        } catch (error) {
            console.log("khong co du lieu cho supplier")
        }
    }

    const handleSort = (event) => {
        setSortProduct(JSON.parse(event.target.value));
        setTotalPage(0);
        setPageList(0);
        setProduct([]);
    }
    const handleSearchSupplier = (event) => {
        console.log(event.target.value);
        if (event.target.value === 0) {
            setSearchProduct(prevState => ({
                ...prevState,
                trademark: null,
            }));
        } else {
            setSearchProduct(prevState => ({
                ...prevState,
                trademark: event.target.value,
            }));
        }
        setTotalPage(0);
        setPageList(0);
        setProduct([]);
    }
    const handleSearchTypeProduct = (event) => {
        console.log(event.target.value);
        if (event.target.value === 0) {
            setSearchProduct(prevState => ({
                ...prevState,
                typeProduct: null,
            }));
        } else {
            setSearchProduct(prevState => ({
                ...prevState,
                typeProduct: event.target.value,
            }));
        }
        setTotalPage(0);
        setPageList(0);
        setProduct([]);
    }
    const handleSearchCategory = (event) => {
        console.log(event.target.value);
        if (event.target.value === 0) {
            setSearchProduct(prevState => ({
                ...prevState,
                material: null,
            }));
        } else {
            setSearchProduct(prevState => ({
                ...prevState,
                material: event.target.value,
            }))
        }
        setTotalPage(0);
        setPageList(0);
        setProduct([]);
    }

    return (
        <>
            <button className={`scroll-to-top-button ${showButton ? 'show' : 'd-none'}`} onClick={scrollToTop}><img
                src={BackToTop} width={30} alt="Back to top"/></button>
            <Header/>
            {/* carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Anh3} className="d-block w-100 " alt="..." height={400}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh1} className="d-block w-100 " alt="..." height={400}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh2} className="d-block w-100 " alt="..." height={400}/>
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
                                <select className="search-product" onChange={handleSearchSupplier}>
                                    <option value={0}>Choose supplier</option>
                                    {suppliers.map((supplier, index) => (
                                        <option value={supplier.id} key={index}>{supplier.nameSupplier}</option>
                                    ))}
                                </select>
                                <select className="search-product" onChange={handleSearchCategory}>
                                    <option value={0}>Choose material</option>
                                    {categorys.map((category, index) => (
                                        <option value={category.id} key={index}>{category.categoryProductName}</option>
                                    ))}
                                </select>
                                <select className="search-product" onChange={handleSearchTypeProduct}>
                                    <option value={0}>Choose type product</option>
                                    {typeProducts.map((typeProduct, index) => (
                                        <option value={typeProduct.id}
                                                key={index}>{typeProduct.nameTypeProduct}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <p className="px-2 m-0"> Sắp xếp:</p>
                                <select className="search-product" aria-label=".form-select-lg example"
                                        onChange={handleSort}>
                                    <option className="mt-2"
                                            value={JSON.stringify({sort: "id", arrangement: 1})}> Latest product
                                    </option>
                                    <option className="mt-2"
                                            value={JSON.stringify({sort: "price", arrangement: 0})}>Price from low to
                                        high
                                    </option>
                                    <option className="mt-2"
                                            value={JSON.stringify({sort: "price", arrangement: 1})}>Price from high to
                                        low
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="row g-4">
                            {products.map((product, index) => (
                                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                    <div className="product-item text-center border h-100 p-2">
                                        <Link to={"/detail/" + product.id}>
                                            <img className=" img-cards" src={product.imageProduct}
                                                 alt={product.nameProduct}/>
                                            <p className="h6 d-inline-block mb-2 mt-3">{product.nameProduct}</p>
                                            <h5 className="text-primary mb-3">${Number.parseInt(product.price)}</h5>
                                            <div className="float-end rating">
                                                <i className="fa fa-star checked text-warning" />
                                                <i className="fa fa-star checked text-warning" />
                                                <i className="fa fa-star  text-warning" />
                                                <i className="fa fa-star  " />
                                                <i className="fa fa-star  " />
                                            </div>
                                        </Link>
                                        {/*<button className="btn btn-outline-primary px-3 ">Add To Cart</button>*/}
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