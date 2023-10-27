import "../css/DetailProduct.css"
import Header from "./Header";
import {useNavigate, useParams} from "react-router-dom";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {
    addRating,
    addToCart,
    checkUserPurchase,
    findDetailProduct,
    getRating,
    getSize
} from "../service/DetailProductService";
import Swal from "sweetalert2";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import {getAllCart} from "../redux/cartAction";
import ReactStars from "react-rating-stars-component";
import {format} from 'date-fns';
import StarRatings from "react-star-ratings/build/star-ratings";

export default function DetailProduct() {
    const param = useParams();
    const navigate = useNavigate();
    const [detailProduct, setDetailProduct] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState([]);
    const [comments, setComment] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [checkSize, setCheckSize] = useState(0);
    const [checkPriceBySize, setCheckPriceSize] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [iputStar, setInputStar] = useState(0);
    const [beCommented, setBeCommented] = useState(false);
    const [showEvaluate, setShowEvaluate] = useState(false);
    const [cart, setCart] = useState({
        quantity: 0,
        sizeId: 0,
        userInformation: 0,
        productId: 0
    });
    const handleCreateRating = async () => {
        const currentDate = format(new Date(), 'dd/MM/yyyy');
        const userId = localStorage.getItem("id");
        if (iputStar === 0 || inputValue === "") {
            await Swal.fire("Please rate and comment on the product", "", "warning")
        } else {
            const rating = {
                starNumber: iputStar,
                comments: inputValue,
                dateComment: currentDate,
                product: detailProduct.productId,
                userInformation: userId
            }
            try {
                await addRating(rating);
                setInputStar(0);
                setInputValue('');
                setBeCommented(!beCommented);
            } catch (error) {
                await Swal.fire("Failed assessment", "", "warning");
            }
        }

    }
    const ratingChanged = (newRating) => {
        setInputStar(newRating);
    }
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const adjustTextareaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    const handleTextareaResize = (event) => {
        adjustTextareaHeight(event.target);
    };
    const addProductToCart = async () => {
        try {
            if (cart.quantity <= detailProduct.quantity) {
                const userId = localStorage.getItem("id");
                await addToCart(cart);
                dispatch(getAllCart(userId));
                toast.success("Added product successfully");
            } else {
                Swal.fire("Exceeds the available quantity", "", "error")
            }

        } catch (error) {

        }
    }
    const handleSize = (event) => {
        if (event.target.value !== 0 && event.target.value !== checkSize) {
            // console.log(event.target.value)
            setCart(prevState => ({
                ...prevState,
                sizeId: event.target.value,
                userInformation: localStorage.getItem("id")
            }))
            setCheckSize((prevState) => event.target.value);
            sizes.map((size, index) => {
                if (size.id === event.target.value) {
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
        try {
            const data = await findDetailProduct(param.id);
            const data1 = await getSize();
            const data3 = await getRating(data.productId);
            const temp = data.image.split(",");

            const data2 = await checkUserPurchase(localStorage.getItem("id"), data.productId);
            if (data2.status === 204) {
                setShowEvaluate(false);
            } else {
                setShowEvaluate(true);
            }

            setDetailProduct(data);
            setComment(data3);
            setCart(prevState => ({
                ...prevState,
                productId: data.productId,
                quantity: quantity
            }))
            setImages(temp);
            setSizes(data1);
        }catch (error){
            Swal.fire("You are not logged in","","error")
            navigate("/sign-in");
        }

    };
    useEffect(() => {
        document.title = 'Jewelry - Detail product'
        window.scrollTo(0, 0);
        getAllDetail().then();
    }, [beCommented]);

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
                                        <span>${Number.parseInt(detailProduct.price * checkPriceBySize)}</span>
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
            {showEvaluate ? (
                <div className="row">
                    <div className="col-8">
                        <h3>Write a comment</h3>
                        <div className="mt-5">
                         <textarea className="form-control thanh-son-comment "
                                   value={inputValue}
                                   maxLength={1000}
                                   placeholder="Write a comment . . ."
                                   onChange={handleInputChange}
                                   onInput={handleTextareaResize}
                         />
                        </div>
                    </div>
                    <div className="col-4 thanh-son-danh-gia">
                        <h3>Evaluate</h3>
                        <div className="row align-items-center mt-4">
                            <div className="col-auto">
                                <h5 className="mt-2">Your rating:</h5>
                            </div>
                            <div className="col-auto">
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    value={iputStar}
                                    size={50}
                                    activeColor="#f4ab20"
                                />
                            </div>
                        </div>
                        <button onClick={() => {
                            handleCreateRating().then();
                        }}
                                className="btn btn-outline-primary thanh-son-comment-button">
                            <i className="fa-solid fa-arrow-right mt-1"></i>
                        </button>
                    </div>
                </div>
            ) : ""}

            <div className="row mt-4">
                <div className="col-8">
                    <h3 className="mb-4 ps-3">Comment<span
                        className="text-length-body">{comments.length !== 0 ? `(` + comments.length + `)` : ""}</span>
                    </h3>
                    {comments.length !== 0 ? comments.map((comment, index) => (
                        <div className="row" key={index}>
                            <div className="justify-content-between d-flex">
                                <div>
                                    <h6 className="d-inline">{comment.userInformation.nameUser}</h6>
                                    <span className="ms-2">{comment.dateComment}</span>
                                </div>
                                <StarRatings
                                    rating={comment.starNumber ? comment.starNumber : 0}
                                    starRatedColor="#f4ab20"
                                    starDimension="20px"
                                    starSpacing="2px"
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                            <div className="comment-before">
                                <p className="text-capitalize">{comment.comments}</p>
                            </div>
                            <hr/>
                        </div>

                    )) : <div><h4 className="text-capitalize text-center text-danger">No comment</h4></div>}

                </div>
                <div className="col-4">

                </div>
            </div>
            <ToastContainer autoClose={2000} className="toast-position"/>
            <Footer/>
        </>
    );
}