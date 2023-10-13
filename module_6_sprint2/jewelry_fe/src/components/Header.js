import Logo from "../img/logo_shop_trang_suc.png";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../lib/animate/animate.min.css"
import Cart from "../img/cart.png"
import {NavLink, useNavigate} from "react-router-dom";
// import {logOut} from "../service/AccountUserService";
import {useEffect, useState} from "react";

export default function Header() {
    const navigate = useNavigate();
    const [use, setUse] = useState(null);
    const loginUser = async () => {
        const nameUser = localStorage.getItem("nameUser");
        if (nameUser !== null) {
            setUse(nameUser);
        }
    }
    const logoutForm =  () => {
        localStorage.removeItem("nameUser");
        localStorage.setItem("jwt", null);
        localStorage.setItem("role", null);
        setUse(null);
        navigate("/");
    }
    useEffect(() => {
        loginUser()
    }, []);
    return (
        <>
            <div className="container-fluid sticky-top headers ">
                <div className="container ">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <NavLink to={"/"} className="navbar-brand">
                            <img style={{borderRadius: "5px"}} src={Logo} alt="logo" width={70} height={70}/>
                        </NavLink>
                        <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto justify-content-center d-flex">
                                <a href="#" className="nav-item nav-link">Home</a>
                                <a href="#" className="nav-item nav-link">About</a>
                                <a href="#" className="nav-item nav-link">Products</a>
                                <a href="#" className="nav-item nav-link">Contact</a>
                                {
                                    !use?
                                        (<div className="btn-group ">
                                        <NavLink to={"/sign-in"} className="nav-item nav-link text-user-name">Sign in</NavLink>
                                        </div> ):(
                                        <div className="btn-group ">
                                            <button className="nav-item nav-link text-user-name "
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false">{use}</button>
                                            <ul className="dropdown-menu menu-infor">
                                                <button
                                                    className="dropdown-item text-user-name text-center mt-2">Information
                                                </button>
                                                <button className="dropdown-item text-user-name text-center mt-2"
                                                        onClick={() => {
                                                            logoutForm();
                                                        }}>Log Out
                                                </button>
                                            </ul>
                                        </div>)

                                }

                            </div>
                            <NavLink to="/cart" className="py-2 d-none d-lg-inline-block position-relative "><img
                                style={{opacity: "0.8"}}
                                height={30} width={30} src={Cart}
                                alt="thanh"/>
                                <span className="cart-number">0</span></NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}