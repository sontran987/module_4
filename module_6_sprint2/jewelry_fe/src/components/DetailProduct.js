import Anh3 from "../img/bo_trang_suc.jpg";
import Anh1 from "../img/da-quy-la-gi.png";
import Anh2 from "../img/nhan_kim_cuong1.jpg";
import "../css/DetailProduct.css"
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";

export default function DetailProduct() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 7,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 4,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 4,
            slidesToSlide: 2
        }
    };
    return (
        <>
            <Header/>
            <div id="hannah" className="pb-5 w-100">
                <div className="mb-5 detail-cart">
                    <div className="container mt-5 position-relative" style={{top: "5rem"}}>
                        <h1 className="title-detail-product">Detail product</h1>
                        <div className=" row row-cols-md-2 row-cols-1 ">

                            <div id="carouselExampleIndicators"
                                 className="carousel slide col col-md-6 col-auto"
                                 data-bs-ride="true"
                                 style={{height: "100%"}}>
                                <div className="carousel-indicators">
                                    <button type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={0}
                                            className={0 === 0 ? "active" : ""}
                                            aria-current="true"
                                            aria-label={`Slide ${1}`}
                                            style={{width: 60, height: 70}}>
                                        <img
                                            src={Anh1}
                                            alt="..."
                                            className="d-block w-100"
                                            style={{border: "1px lightskyblue solid"}}
                                        />
                                    </button>
                                    <button type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={1}
                                            className={1 === 0 ? "active" : ""}
                                            aria-current="true"
                                            aria-label={`Slide ${2}`}
                                            style={{width: 60, height: 70}}>
                                        <img
                                            src={Anh2}
                                            alt="..."
                                            className="d-block w-100"
                                            style={{border: "1px lightskyblue solid"}}
                                        />
                                    </button>
                                    <button type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={2}
                                            className={2 === 0 ? "active" : ""}
                                            aria-current="true"
                                            aria-label={`Slide ${3}`}
                                            style={{width: 60, height: 70}}>
                                        <img
                                            src={Anh3}
                                            alt="..."
                                            className="d-block w-100"
                                            style={{border: "1px lightskyblue solid"}}
                                        />
                                    </button>
                                </div>
                                {/* ----- */}
                                <div className="carousel-inner">
                                    <div
                                        className={`carousel-item ${
                                            0 === 0 ? "active" : ""
                                        }`}
                                    >
                                        <img src={Anh1} width={200} height={400} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div
                                        className={`carousel-item ${
                                            1 === 0 ? "active" : ""
                                        }`}
                                    >
                                        <img src={Anh2} width={200} height={400} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div
                                        className={`carousel-item ${
                                            2 === 0 ? "active" : ""
                                        }`}
                                    >
                                        <img src={Anh3} width={200} height={400} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                    <span className="carousel-control-next-icon"
                          aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className=" col col-md-6 col-auto">
                                <h1 className="name"> Forever</h1>
                                <h4>
                                    <span>1000000$</span>
                                </h4>
                                <div style={{backgroundColor: "lightblue", borderRadius: 10}} className="p-2">
                                    <p>Describe: <span> Made by artist ThahJay, it has the meaning of concentric eternity and is made of 9999 gold with 18-karat diamonds.</span>
                                    </p>
                                </div>
                                <hr/>
                                <p>
                                    <span className=" fw-bold">Product code: </span>
                                    <span>38138</span>
                                </p>
                                <hr/>
                                <p>
                                    <span className=" fw-bold">Category: </span>
                                    <span>Ring</span>
                                </p>
                                <hr/>
                                <p>
                                    <span className=" fw-bold">Trademark: </span>
                                    <span> Swarovski</span>
                                </p>

                                <div className="buttons d-flex justify-content-between align-items-center">
                                    <div className="btn-input-group d-flex justify-content-start align-items-end ">
                                        <span className="mb-1 me-2">Quantity: </span>
                                        <input
                                            type="button"
                                            defaultValue="-"
                                            className="btn-minus"
                                            data-field="quantity"
                                        />
                                        <input
                                            id="quantity-value"
                                            type="number"
                                            step={1}
                                            maxLength="2"
                                            min="1"
                                            max="99"
                                            defaultValue={1}
                                            style={{
                                                width: "50px",
                                                height: "35px",
                                                border: "1px white",
                                                borderRadius: "5px",
                                            }}
                                            name="quantity"
                                            className=" input-quantity text-center px-2"
                                        />
                                        <input
                                            type="button"
                                            defaultValue="+"
                                            className="btn-plus"
                                            data-field="quantity"/>
                                    </div>
                                    <Link to="/">
                                        <button
                                            className="btn btn-outline-primary"
                                        >ADD TO CART
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}