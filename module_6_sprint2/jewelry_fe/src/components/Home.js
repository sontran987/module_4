import Anh3 from "../img/bo_trang_suc.jpg";
import Anh1 from "../img/da-quy-la-gi.png";
import Anh2 from "../img/nhan_kim_cuong1.jpg";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../lib/animate/animate.min.css"

export default function Home(){
    return(
        <>
            {/* carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Anh3} className="d-block w-100" alt="..." width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh1} className="d-block w-100" alt="..."width={100} height={500}/>
                    </div>
                    <div className="carousel-item">
                        <img src={Anh2} className="d-block w-100" alt="..."width={100} height={500}/>
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

        </>
    );
}