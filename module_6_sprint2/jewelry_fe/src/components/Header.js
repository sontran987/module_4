import Logo from "../img/logo_shop_trang_suc.png";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/owlcarousel/assets/owl.carousel.min.css"
import "../lib/animate/animate.min.css"
import Cart from "../img/cart.png"

export default function Header(){
    return(
        <>
          <div className="container-fluid sticky-top heade ">
            <div className="container ">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <a href="#" className="navbar-brand">
                  <img style={{borderRadius:"5px"}} src={Logo} alt="logo" width={70} height={70}/>
                </a>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="product.html" className="nav-item nav-link">Products</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                      <a href="contact.html" className="nav-item nav-link">Sign in</a>
                  </div>
                  <a href="" className=" py-2 d-none d-lg-inline-block"><img style={{opacity: "0.8"}} height={40} width={50} src={Cart} alt="thanh"/></a>

                </div>
              </nav>
            </div>
          </div>
        </>
    );
}