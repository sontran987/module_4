import "../css/cart.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    checkQuantityProduct,
    deleteOrderById,
    getAllCartOrder,
    getUserInformation,
    updateQuantityProduct
} from "../service/CartService";
import Swal from "sweetalert2";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {createNewOrder} from "../service/PurchaseService";


export default function Cart() {
    const [isUpdated, setIsUpdated] = useState(false);
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [useInformation, setUserInformation] = useState();
    const [checkOut, setCheckOut] = useState(false);
    const navigate = useNavigate();
    const handleMinus = async (event) => {
        if (event.quantity > 1) {
            await updateQuantityProduct(event.quantity - 1, event.id);
            setIsUpdated(!isUpdated);
        }
    }
    const handlePlus = async (cart) => {
        if (cart.quantity < cart.product.quantity) {
            await updateQuantityProduct(cart.quantity + 1, cart.id);
            setIsUpdated(!isUpdated);
        }
    }
    const checkDeleteProductOnCartById = async (cart) => {
        await deleteOrderById(cart.id).then(() => {
            getAllCart().then();
        });

    }
    const getTotalPriceOfProduct = (data) => {
        data.map((cart) => {
            setTotalPrice(prevState => (prevState + (cart.quantity * cart.product.price * cart.size.conversionRate)));
        })

    }
    const checkRenderPaypal = async (value) => {
        if (!checkOut) {
            setCheckOut(true);
            renderPaypal(value);
        }


    }

    const renderPaypal = (value) => {
        if (window.paypal) {
            window.paypal.Buttons().close();
        }
        window.paypal
            .Buttons({
                createOrder: (data, action, error) => {
                    const total = parseFloat(totalPrice);
                    return action.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                            description: "",
                            amount: {
                                currency_code: "USD",
                                value: total.toFixed(2),
                            },
                        }],
                    });
                },
                onApprove: async (data, actions) => {
                    const total = parseFloat(totalPrice);
                    try {
                        const idUser = localStorage.getItem("id");
                        const data = await checkQuantityProduct(idUser);
                        const order = await actions.order.capture();

                        // after we're done with paypal
                        let deletedCartIDs = [];
                        const userId = localStorage.getItem("id");
                        {
                            carts.forEach((cart) => {
                                deletedCartIDs.push(cart.id)
                            })
                        }
                        // console.log(deletedCartIDs);
                        const res = await createNewOrder(
                            userId,
                            value.note,
                            deletedCartIDs
                        );
                        navigate("/success", {
                            state: {
                                purchaseDetails: res.data,
                                totalPrice: total,
                            },
                        });
                    } catch (error) {
                        await Swal.fire(`${error.response.data}`, "", "error");

                    }

                },
                onError: (err) => {
                    // console.log(err);
                    Swal.fire("Payment failed! Please try again!", "", "error").then();
                }
            })
            .render("#paypal-button-container");
    };
    const getAllCart = async () => {
        // setCarts([]);
        const idUser = localStorage.getItem("id");
        const dataCart = await getAllCartOrder(idUser);
        const dataUserInformation = await getUserInformation(idUser);
        setCarts(dataCart);
        setUserInformation(dataUserInformation);
        setTotalPrice(0);
        getTotalPriceOfProduct(dataCart);
    }
    useEffect(() => {
        document.title = 'Jewelry - Shop '
        getAllCart().then();
    }, [isUpdated]);
    if (!useInformation) {
        return null;
    }
    return (
        <>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                <div className="col justify-content-end d-flex"> {carts.length} item</div>
                            </div>
                        </div>
                        <div className="cart-order">
                            {carts.map((cart, index) => (<div className="row border-top border-bottom" key={index}>
                                <div className="row main align-items-center">
                                    <div className="col-2">
                                        <img className="img-fluid" src={cart.product.imageProduct}/>
                                    </div>
                                    <div className="col">
                                        <div className="row">{cart.product.nameProduct}</div>
                                    </div>
                                    <div className="col">
                                        <div
                                            className="d-flex flex-md-row flex-column justify-content-center align-items-center">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="btn-minus"
                                                onClick={() => {
                                                    handleMinus(cart);
                                                }}
                                            />
                                            <div style={{
                                                           width: "30px",
                                                           height: "20px",
                                                           border: "1px white",
                                                           borderRadius: "5px",
                                                           textAlign: "center "
                                                       }}>{cart.quantity}</div>
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="btn-plus"
                                                onClick={() => {
                                                    handlePlus(cart);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col ms-4">{cart.size.sizeName}</div>
                                    <div
                                        className="col">${Number.parseInt(cart.product.price * cart.size.conversionRate)}
                                        <span className="close">
                                        <button className="btn-cart" onClick={() => {
                                            checkDeleteProductOnCartById(cart).then();
                                            Swal.fire({
                                                title: "Successfully removed product from cart",
                                                icon: "success",
                                                showConfirmButton: false,
                                                timer: 2000
                                            });
                                        }}>
                                        <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </span>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                        <div className="back-to-shop"><Link to="/"> <i className="fa-solid fa-left-long"></i> <span
                            className="text-muted">Back to shop</span></Link></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Invoice information</b></h5></div>
                        <hr/>
                        <div className="row">
                            <div className="col">EXPECTED</div>
                            <div className="col text-end">${totalPrice} </div>
                        </div>
                        <Formik
                            initialValues={{
                                nameUser: useInformation.nameUser,
                                address: useInformation.address,
                                phoneNumber: 0 + useInformation.phoneNumber,
                                birthday: useInformation.birthday,
                                note: ""
                            }}
                            validationSchema={Yup.object({
                                nameUser: Yup.string().required("Please enter name")
                                    .max(100, "Please enter less than 100 characters")
                                    .matches(
                                        /^[\p{L}\s]+$/u,
                                        "The name must contain only letters and spaces"),
                                address: Yup.string().required("Please enter address")
                                    .max(100, "Please enter less than 100 characters")
                                    .matches(/^[\p{L}\p{N}\s]+$/u, "Address contains only numbers, letters and '/'"),
                                phoneNumber: Yup.string().required("Please enter phone number")
                                    .min(10, "Please enter only 10 to 11 numbers")
                                    .max(11, "Please enter only 10 to 11 numbers")
                                    .matches(
                                        /^0\d{9,10}$/u,
                                        "Phone number must be in the correct format 0XXXXXXXXX"),
                                birthday: Yup.string().required("Please enter birthday")

                            })}
                            onSubmit={(value) => {
                                checkRenderPaypal(value);
                            }}>
                            <Form>
                                <Field className="information input" type="text" name='nameUser'
                                       placeholder="Enter user information"/>
                                <div style={{height: '10px'}}>
                                    <ErrorMessage name='nameUser' style={{color: 'red', marginLeft: '20px'}}
                                                  component={'small'}/>
                                </div>
                                <Field type="text" name="phoneNumber" className="information input"
                                       placeholder="Enter phone number"/>
                                <div style={{height: '10px'}}>
                                    <ErrorMessage name='phoneNumber' style={{color: 'red', marginLeft: '20px'}}
                                                  component={'small'}/>
                                </div>
                                <Field type="text" name="birthday" className="information input"
                                       placeholder="Enter birthday"/>
                                <div style={{height: '10px'}}>
                                    <ErrorMessage name='birthday' style={{color: 'red', marginLeft: '20px'}}
                                                  component={'small'}/>
                                </div>
                                <Field type="text" name="address" className="information input"
                                       placeholder="Enter address"/>
                                <div style={{height: '10px'}}>
                                    <ErrorMessage name='address' style={{color: 'red', marginLeft: '20px'}}
                                                  component={'small'}/>
                                </div>
                                <Field as="textarea" name="note" className="information"
                                       placeholder="Note"></Field>
                                <div style={{height: '10px'}}>
                                </div>
                                <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                                    <div className="col">TOTAL PRICE</div>
                                    <div className="col text-end ">${totalPrice}</div>
                                </div>
                                <button type={"submit"} className="btn-cart pay">PROCEED PAYMENT</button>
                            </Form>
                        </Formik>
                        <div id="paypal-button-container" className="w-100 mt-3"></div>
                    </div>
                </div>
            </div>
        </>);
}