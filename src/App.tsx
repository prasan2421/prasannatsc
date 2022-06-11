import React, { useEffect, useState, useRef } from "react";
// import logo from './logo.svg';
import './App.css';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { ColorModeContext } from './constants/color-context';
import CssBaseline from '@mui/material/CssBaseline';
import {Toolbar,Box} from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import Navbar from "./components/Navbar";
import { amber, deepOrange, grey } from '@mui/material/colors';
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
import Drawer from "./components/DrawerNav";
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
          ...(mode === "dark" && {
            background: {
              default: '#1d1d1d',
              paper: '#181818',
             
            },
           
          }),
         
        },
      }), 
    [mode],
  );

  return (
   
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <SimpleBar style={{ height: 'calc(100% - 6rem)'}}>
            <BrowserRouter>
              <Box sx={{ display: 'flex'}}>
                <CssBaseline />
              <GoTop />
              
              <Navbar/>
              <Drawer/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<ProductList/>}/>  
                <Route path="/about" element={<About/>}/>  
                <Route path="/cart" element={<Cart/>}/>  
                <Route path="/project/:id" element={<Product/>}/>
                  
              </Routes>
              {/* <Footer/> */}
              </Box>
          </BrowserRouter>    
          </SimpleBar>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
    
  );
}

export default App;
