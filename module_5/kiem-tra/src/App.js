import Head from "./component/Head";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./component/Footer";
import DanhSachNhac from "./component/DanhSachNhac";
import ThemMoi from "./component/ThemMoi";

function App() {
    return (
        <>
            <Head/>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<DanhSachNhac />}></Route>
                    <Route path={"/create"} element={<ThemMoi />} ></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
