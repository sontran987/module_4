import Header from "./Header";
import {useEffect, useState} from "react";
import {getAllOrderDate, getAllOrderHistory} from "../service/PurchaseService";
import moment from "moment";
import {Link} from "react-router-dom";

export default function History() {
    const [orderProducts, setOrderProduct] = useState([]);
    const [orderDates, setOrderDate] = useState([]);
    useEffect(() => {
        document.title = 'Jewelry - History'
        window.scrollTo(0, 0);
    }, []);
    const getAllProduct = async () => {
        try {
            const userId = localStorage.getItem("id");
            const data = await getAllOrderHistory(userId);
            const data1 = await getAllOrderDate(userId);
            setOrderProduct(data.data);
            setOrderDate(data1.data);
        } catch (error) {
            console.log("chua mua hang");
        }
    }
    useEffect(() => {
        getAllProduct().then();
    }, [])

    return (
        <>
            <Header/>
            <div className="align-items-center px-5">
                {orderDates.map((orderdate, index) => (
                    <div key={index}>
                        <h5 className="text-primary">{moment(orderdate.orderDate).format("DD/MM/YYYY")}</h5>
                        {orderProducts.map((orderProduct, index) => (
                            moment(orderdate.orderDate).format("DD/MM/YYYY") === moment(orderProduct.orderDate).format("DD/MM/YYYY") ? (
                                <Link to={"/detail/" + orderProduct.productId} className="m-0">
                                    <div className="row justify-content-between d-flex border-bottom mt-3 pt-2 "
                                         key={index}>
                                        <div className="col-1"><img src={orderProduct.image} height={50} width={60}/>
                                        </div>
                                        <div className="col-4">{orderProduct.nameProduct}</div>
                                        <div className="col-2">${orderProduct.price}</div>
                                        <div className="col-2">Quantity: {orderProduct.quantity}</div>
                                        <div className="col-1">{orderProduct.nameSize}</div>
                                    </div>
                                </Link>) : <div></div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}