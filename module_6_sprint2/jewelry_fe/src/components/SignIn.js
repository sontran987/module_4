import "../css/signin.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import Swal from "sweetalert2";
import {login} from "../service/AccountUserService";

export default function SignIn() {
    // const [accountUser, setAccountUser] = useState({
    //     userName: null,
    //     userPassword: null
    // });
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Jewelry - Sign in'
    }, []);
    const loginByUserName = async (value) => {
        try {
            const result = await login(value);
            localStorage.setItem("jwt", result.token)
            localStorage.setItem("nameUser", result.nameUser)
            localStorage.setItem("id", result.id)
            localStorage.setItem("role", result.role)
            const tempURL = localStorage.getItem("tempURL");
            localStorage.removeItem("tempURL");
            if (tempURL) {
                navigate(tempURL);
            } else {
                navigate('/');
            }
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data,
            })

        }
    };

    return (
        <>

        <body>
        <Formik
            initialValues={{
                userName: "",
                userPassword: ""
            }}
            onSubmit={(values) => {
                loginByUserName(values).then();
            }}>
            <Form>
                <section><span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
                    <span></span>
                    <span></span>

                    <div className="signin">
                        <div className="content">

                            <h2>Sign In</h2>
                            <div className="form">
                                <div className="inputBox">
                                    <Field className="input" type="text" name="userName" required/> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <Field className="input" type="password" name="userPassword" required/> <i>Password</i>
                                </div>
                                <div className="links"><a href="#">Forgot Password</a> <a href="#">Signup</a>
                                </div>
                                <div className="inputBox">
                                    <input className="input" type="submit" value="Login"/>
                                </div>
                                <Link to="/" className="inputBox">
                                    <button>Back</button>
                                </Link>
                            </div>

                        </div>

                    </div>

                </section>
            </Form>
        </Formik>
        </body>

{/*partial */
}

</>
)
    ;
}