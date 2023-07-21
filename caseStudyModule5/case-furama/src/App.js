import Header from './component/Header';
import Footer from './component/Footer';
import Carousel from './component/Carousel';
import ListService from './component/ListService';
import EditService from './component/EditService';
import CreateService from './component/CreateService';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <BrowserRouter>
        <Header />
        <Carousel />
        <Routes>
          <Route path='' element={<ListService />}/>
          <Route path='/service/edit' element={<EditService />}/>
          <Route path='/service/create' element={<CreateService />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
