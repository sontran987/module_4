import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <p className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">Hotel</h1>
                        </p>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2" />
                                    <p className="mb-0">info@gmail.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2" />
                                    <p className="mb-0">+0325563977</p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="me-3" href><i className="fab fa-facebook-f" /></a>
                                    <a className="me-3" href><i className="fab fa-twitter" /></a>
                                    <a className="me-3" href><i className="fab fa-linkedin-in" /></a>
                                    <a className="me-3" href><i className="fab fa-instagram" /></a>
                                    <a className href><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to={'/'} className="nav-item nav-link">Home</NavLink>
                                    <NavLink to={'/customer'} className="nav-item nav-link">Customer</NavLink>
                                    <NavLink to={'/service'} className="nav-item nav-link">Services</NavLink>
                                    <NavLink to={'/contract'} className="nav-item nav-link">Contract</NavLink>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3" /></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>


    )

}


export default Header;