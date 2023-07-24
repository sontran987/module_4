import Header from './component/Header';
import Footer from './component/Footer';
import Carousel from './component/Carousel';
import ListService from './component/ListService';
import ListCustomer from './component/ListCustomer';
import EditService from './component/EditService';
import EditCustomer from './component/EditCustomer';
import CreateService from './component/CreateService';
import CreateCustomer from './component/CreateCustomer';
import CreateContract from './component/CreateContract';
import ListContract from './component/ListContract';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <BrowserRouter>
        <Header />
        <Carousel />
        <Routes>
          <Route path='/service' element={<ListService />}/>
          <Route path='/customer' element={<ListCustomer />}/>
          <Route path='/contract' element={<ListContract />}/>
          <Route path='/service/edit' element={<EditService />}/>
          <Route path='/customer/edit' element={<EditCustomer />}/>
          <Route path='/service/create' element={<CreateService />}/>
          <Route path='/customer/create' element={<CreateCustomer />}/>
          <Route path='/contract/create' element={<CreateContract />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
