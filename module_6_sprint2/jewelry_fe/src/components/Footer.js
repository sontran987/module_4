import Logo from "../img/logo_shop_trang_suc.png";
export  default function Footer(){
    return(
        <>

             {/*Footer Start */}
            <div class="container-fluid bg-white footer">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <a href="#" class="d-inline-block mb-3">
                                <img src={Logo} alt="logo" width={100} height={100} style={{borderRadius:"20px"}}/>
                            </a>
                            <p class="mb-0">Customers are very important, customers will be the pride of our store and we will create respect for them.</p>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 class="mb-4">Get In Touch</h5>
                            <p><i class="fa fa-map-marker-alt me-3"></i>9038 Acceleration, New York, INDONESIA</p>
                            <p><i class="fa fa-phone-alt me-3"></i>+030 873 2839</p>
                            <p><i class="fa fa-envelope me-3"></i>jewelry@gmail.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-square btn-outline-primary me-1" href=""><i
                                    class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <h5 class="mb-4">Our Products</h5>
                            <a class="btn btn-link" href="">Hair Shining Shampoo</a>
                            <a class="btn btn-link" href="">Anti-dandruff Shampoo</a>
                            <a class="btn btn-link" href="">Anti Hair Fall Shampoo</a>
                            <a class="btn btn-link" href="">Hair Growing Shampoo</a>
                            <a class="btn btn-link" href="">Anti smell Shampoo</a>
                        </div>
                        <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <h5 class="mb-4">Popular Link</h5>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                            <a class="btn btn-link" href="">Career</a>
                        </div>
                    </div>
                </div>

            </div>
            </>
    );
}