import React, { useEffect, useState, useRef } from "react";
// import logo from './logo.svg';
import './App.css';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { ColorModeContext } from './constants/color-context';
// import Navbar from "./components/Navbar";
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

import GoTop from "./components/goTop";
import Product from "./pages/Product";
import { styled, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';


import './css/Header.css';


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }), 
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
    <BrowserRouter>
    
      <GoTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/cart" element={<Cart/>}/>  
        <Route path="/product/:id" element={<Product/>}/>
          
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
