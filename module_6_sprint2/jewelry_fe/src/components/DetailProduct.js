import Anh3 from "../img/bo_trang_suc.jpg";
import Anh1 from "../img/da-quy-la-gi.png";
import Anh2 from "../img/nhan_kim_cuong1.jpg";
import "../css/DetailProduct.css"
import Header from "./Header";
export default function DetailProduct() {
    return (
        <>
        <Header/>
        <div id="hannah" className="pb-5 w-100">
            <div className="mb-5 detail-cart">
                <div className="container mt-5 position-relative" style={{top: "5rem"}}>
                    <h1>Detail product</h1>
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
                            <h1 className="name">Nhẫn cưới</h1>
                            <h4>
                                <span>1000000 $</span>
                            </h4>
                            <div style={{backgroundColor: "lightblue",borderRadius: 10}} className="p-4">
                                <p>Mô tả: <span> Nhẫn cưới ngày vui</span></p>
                            </div>
                            <hr/>
                            <p>
                                <span className=" fw-bold">Mã sản phẩm: </span>
                                <span>sanpham</span>
                            </p>
                            <hr/>
                            <p>
                                <span className=" fw-bold">Danh mục: </span>
                                <span>thông tin</span>
                            </p>
                            <hr/>
                            <p>
                                <span className=" fw-bold">Nhà sản xuất: </span>
                                <span> thông tin</span>
                            </p>
                            <p className="mt-2">Sô lượng</p>
                            <div className="buttons d-flex justify-content-between align-items-center">
                                <div className="btn-input-group col d-flex justify-content-start align-items-end ">
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
                                <button
                                    className="col btn fw-bold mb-0"
                                    style={{
                                        backgroundColor: "orange",
                                        height: "38px",
                                        textDecoration: "none",
                                        color: "black",
                                        cursor: "pointer",
                                    }}>THÊM VÀO GIỎ HÀNG
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}