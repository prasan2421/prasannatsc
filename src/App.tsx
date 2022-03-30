import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>     
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
