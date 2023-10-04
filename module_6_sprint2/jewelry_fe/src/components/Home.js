import Anh3 from "../img/bo_trang_suc.jpg";
import Anh1 from "../img/da-quy-la-gi.png";
import Anh2 from "../img/nhan_kim_cuong1.jpg";
import Header from '../components/Header';
import Footer from "../components/Footer";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../lib/animate/animate.min.css"
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header/>
            {/* carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Anh3} className="d-block w-100" alt="..." width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh1} className="d-block w-100" alt="..." width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh2} className="d-block w-100" alt="..." width={100} height={500}/>
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
                        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                            <h1 className="text-primary mb-3">Welcome to our product area</h1>
                            <p className="mb-5">Here we will provide you with quality products that show your nobility</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="product-item text-center border h-100 p-2">
                                    <Link to="detail">
                                    <img className="img-fluid " src={Anh3} alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <p className="h6 d-inline-block mb-2">Hair Shining Shampoo</p>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                    </Link>
                                        <Link to="cart" className="btn btn-outline-primary px-3">Add To Cart</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Anti Hair Fall Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Hair Growing Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Hair Shining Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Anti-dandruff Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-1.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Anti Hair Fall Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                                <div className="product-item text-center border h-100 p-4">
                                    <img className="img-fluid mb-4" src="img/product-2.png" alt=""/>
                                        <div className="mb-2">
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small className="fa fa-star text-primary"></small>
                                            <small>(99)</small>
                                        </div>
                                        <a href="" className="h6 d-inline-block mb-2">Hair Growing Shampoo</a>
                                        <h5 className="text-primary mb-3">$99.99</h5>
                                        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}