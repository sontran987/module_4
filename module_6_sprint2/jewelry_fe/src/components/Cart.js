import "../css/cart.css"
import {Link} from "react-router-dom";

export default function Cart() {
    return (
        <>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col justify-content-end d-flex">3 items</div>
                            </div>
                        </div>
                        <div className="cart-order">
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"/>
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid"
                                                                src="https://i.imgur.com/1GrakTl.jpg"/></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">$ 44.00 <span className="close"><button className="btn-cart">
                                        <i className="fa-solid fa-xmark"></i></button></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="back-to-shop"><Link to="/"> <i className="fa-solid fa-left-long"></i> <span
                            className="text-muted">Back to shop</span></Link></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Invoice information</b></h5></div>
                        <hr/>
                        <div className="row">
                            <div className="col">EXPECTED</div>
                            <div className="col text-right">$ 132.00</div>
                        </div>
                        <form>
                            <input type="text" className="information input" placeholder="Enter information"/>
                            <input type="text" className="information input" placeholder="Enter information"/>
                            <input type="text" className="information input" placeholder="Enter information"/>
                            <input type="text" className="information input" placeholder="Enter information"/>
                            <textarea className="information"
                                      placeholder="Enter information"></textarea>
                        </form>
                        <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">$ 137.00</div>
                        </div>
                        <button className="btn-cart pay">PAY</button>
                    </div>
                </div>
            </div>
        </>
    );
}