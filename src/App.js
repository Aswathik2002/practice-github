import logo from './logo.svg';
import './App.css';
import {Header} from './components1/head';
import{Nav1} from './components1/Navitem';
import { Products1 } from './components1/productex';
import {Productfilter1 } from './components1/prodfilterex';
// import {AddtoCart} from './components1/AddToCart';
import { Row ,Col} from 'react-bootstrap';
import {Departmentfilter} from './components1/DepartmentFilter';
import {WishList} from './components1/WishList';
import {Sidefilter} from './components1/Sidefilter';

import { Route, Routes } from "react-router-dom";
import {AddtoCart} from './components1/AddToCart';
// import {Electronics} from './components1/Electronics';
// import SingleProducts from './components1/singleproduct';

function App() {

  return(
    <>
  
  <Header/>
  <Nav1/>
 
  <div className="d-flex flex-row flex-col">
      <div className="col-2 ms-1">
         <Sidefilter />
       </div>

  
  
{/*   
  <Col xl={10}>
     <Products1/>
  </Col> 

  <Productfilter1/> 

  <h1>CartItems</h1>
  <AddtoCart/>

  <h1>Department</h1>
  <Departmentfilter/>

  <h1>WishList</h1>
  <WishList/> */}

<Routes>

  <Route path="/" element={<Products1 />} />
  <Route path="/products" element={<Productfilter1/>} />
  <Route path="/AddtoCart" element={<AddtoCart/>} />
  <Route path="/WishList" element={<WishList/>} />
  <Route path="/Sidefilter" element={<Sidefilter />} />
 
 </Routes>
 </div>  
 
 <Productfilter1/>
 <Departmentfilter/>


  </>
  );
}

export default App;
