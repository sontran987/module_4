import "../css/DetailProduct.css"
import Header from "./Header";
import {useParams} from "react-router-dom";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {addToCart, findDetailProduct, getSize} from "../service/DetailProductService";
import Swal from "sweetalert2";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import {getAllCart} from "../redux/cartAction";

export default function DetailProduct() {
    const param = useParams();
    const [detailProduct, setDetailProduct] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [checkSize, setCheckSize] = useState(0);
    const [checkPriceBySize, setCheckPriceSize] = useState(1);
    const [cart, setCart] = useState({
        quantity: 0,
        sizeId: 0,
        userInformation: 0,
        productId: 0
    });
    const dispatch = useDispatch();
    const addProductToCart = async () => {
        try {
            const userId = localStorage.getItem("id");
            await addToCart(cart);
            dispatch(getAllCart(userId));
            toast.success("Thêm sản phẩm thành công");
        } catch (error) {

        }
    }
    const handleSize = (event) => {
        if (event.target.value !== 0 && event.target.value !== checkSize) {
            console.log(event.target.value)
            setCart(prevState => ({
                ...prevState,
                sizeId: event.target.value,
                userInformation: localStorage.getItem("id")
            }))
            setCheckSize((prevState) => event.target.value);
            sizes.map((size,index)=>{
                if (size.id == event.target.value ){
                    console.log(size.conversionRate);
                    setCheckPriceSize(size.conversionRate);
                }
            })
        }
    }
    const handleMinus = () => {
        if (quantity > 1) {
            setCart(prevState => ({
                ...prevState,
                quantity: quantity - 1
            }))
            setQuantity((prevState) => prevState - 1)
        }
    }
    const handlePlus = () => {
        if (quantity < detailProduct.quantity) {
            setCart(prevState => ({
                ...prevState,
                quantity: quantity + 1
            }))
            setQuantity((prevState) => prevState + 1)
        }

    }
    const getAllDetail = async () => {
        const data = await findDetailProduct(param.id);
        setDetailProduct(data);
        setCart(prevState => ({
            ...prevState,
            productId: data.productId,
            quantity: quantity
        }))
        const temp = data.image.split(",");
        setImages(temp);
        const data1 = await getSize();
        setSizes(data1);
    };

    useEffect(() => {
        document.title = 'Jewelry - Detail product'
        getAllDetail().then();
    }, []);

    return (
        <>
            <Header/>
            <div id="hannah" className="pb-5 w-100">
                <div className="mb-5 detail-cart">
                    <div className="container mt-5 position-relative px-4" style={{top: "5rem"}}>
                        <h1 className="title-detail-product">Detail product</h1>
                        <div className=" row row-cols-md-2 row-cols-1 ">
                            <div id="carouselExampleIndicators"
                                 className="carousel slide col col-md-6 col-auto"
                                 data-bs-ride="true"
                                 style={{height: "100%"}}>
                                <div className="carousel-indicators">
                                    {images.length > 0 &&
                                        images.map((el, index) => {
                                            return (
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index}
                                                    className={index === 0 ? "active" : ""}
                                                    aria-current="true"
                                                    aria-label={`Slide ${index + 1}`}
                                                    style={{width: 60, height: 70}}
                                                >
                                                    <img
                                                        src={el}
                                                        alt="..."
                                                        className="d-block w-100"
                                                        style={{border: "1px lightskyblue solid"}}
                                                    />
                                                </button>
                                            );
                                        })}
                                </div>
                                {/* ----- */}
                                <div className="carousel-inner">
                                    {images.length > 0 &&
                                        images.map((el, index) => {
                                            return (
                                                <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                    <img src={el} width={200} height={400} className="d-block w-100"
                                                         alt="..."/>
                                                </div>
                                            );
                                        })}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            {
                                <div className=" col col-md-6 col-auto">
                                    <h2 className="name">{detailProduct.productName}</h2>
                                    <h4>
                                        <span>${Number.parseInt(detailProduct.price * checkPriceBySize * quantity)}</span>
                                    </h4>
                                    <div style={{backgroundColor: "#90bc79", borderRadius: 10}} className="p-2">
                                        <p>Describe: <span>{detailProduct.productDescribe}</span>
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <p className="col-8 p-0 w-auto mb-1">
                                            <span className="fw-bolder">Trademark: </span>
                                            <span>{detailProduct.supplier}</span>
                                        </p>
                                        <p className="col-4 text-center mb-1">
                                            <span className="fw-bold">Material: </span>
                                            <span>{detailProduct.category}</span>
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <p className="col-8 p-0 w-auto mb-2">
                                            <span className=" fw-bold">Product type: </span>
                                            <span>{detailProduct.productType}</span>
                                        </p>
                                        <p className="col-4 text-center mb-2">
                                            <span className=" fw-bold">Size: </span>
                                            <select className="custom-select" onClick={handleSize}>
                                                <option value={0}>Choose size</option>
                                                {sizes.map((size, index) => (
                                                    <option value={size.id}>{size.sizeName}</option>
                                                ))}
                                            </select>
                                        </p>
                                        <p className="col-4 text-center mb-2">
                                            <span className=" fw-bold">In stock: </span>
                                            <span>{detailProduct.quantity}</span>
                                        </p>
                                    </div>
                                    <div className="buttons d-flex justify-content-between align-items-center">
                                        <div className="btn-input-group d-flex justify-content-start align-items-end ">
                                            <span className="mb-1 me-2">Quantity: </span>
                                            <input type="button"
                                                   defaultValue="-"
                                                   className="btn-minus"
                                                   data-field="quantity"
                                                   onClick={handleMinus}
                                            />
                                            <input id="quantity-value"
                                                   type="number" step={1}
                                                   maxLength="2" min="1"
                                                   value={quantity}
                                                   readOnly
                                                   style={{
                                                       width: "40px", height: "30px", padding: 0,
                                                       border: "1px white", borderRadius: "5px"
                                                   }}
                                                   name="quantity" className="input-quantity text-center px-2"/>
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="btn-plus"
                                                data-field="quantity"
                                                onClick={handlePlus}/>
                                        </div>
                                        {checkSize !== 0 ?
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() => {
                                                    addProductToCart().then();
                                                }}
                                            >ADD TO CART
                                            </button> : <button
                                                className="btn btn-outline-primary"
                                                onClick={() => {
                                                    Swal.fire("Please choose size", "", "warning")
                                                }}
                                            >ADD TO CART
                                            </button>}

                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} className="toast-position"/>
            <Footer/>
        </>
    );
}