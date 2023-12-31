import Home from "./components/Home";
import SignIn from "./components/SignIn";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
import {axiosClient} from "./service/AccountUserService";
import UserInformation from "./components/UserInformation";
import Success from "./components/Success";
import History from "./components/History";

function App() {
    axiosClient();
    return (
        <>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/detail/:id" element={<DetailProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/information" element={<UserInformation/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </>
    )
        ;
}

export default App;
