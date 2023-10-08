import './App.css';
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import {Route, Routes} from "react-router-dom";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/detail" element={<DetailProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    )
        ;
}

export default App;
