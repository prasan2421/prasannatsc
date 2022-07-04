// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
import * as React from 'react';
import { useState,useContext, createContext } from "react";
// import styled from "styled-components";

// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { styled, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import {Toolbar,Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Zoom from '@mui/material/Zoom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import { SwipeableDrawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Divider from '@mui/material/Divider';

import useMediaQuery from '@mui/material/useMediaQuery';
import '../css/Header.css';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { ColorModeContext } from '../constants/color-context';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
// import { actions } from '../redux/counterSlice';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { decrement } from '../redux/counterSlice';


const drawerWidth = 150;
const drawerWidthFull = '100%';






const navData=[
  {'title':'Home', 'link':'/'},
  {'title':'About', 'link':'/about'},
  {'title':'My Skills', 'link':'/skill'},
  {'title':'Work', 'link':'/work'},
  {'title':'contact', 'link':'/contact'} ]


const blue2 = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};



const DrawerNav= (props:any) => {
  const [state, setState] = React.useState({
    top: false,
   
  });



  const theme = useTheme();
  
  const toggleDrawer =
  (anchor: 'top', open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

 
  const [open, setOpen] = React.useState(true);

 

  const menuId = 'primary-search-account-menu';
  

  const drawerContentWeb=(colorMode:any, dispatch:any)=>{
    
    return(
      <Box sx={{height:'100vh', justifyContent:'space-between', display:'flex', flexDirection:'column'}}>
      <Box sx={{  padding:'20px', height:'7rem', display:{xs:'flex', md:'block'}, justifyContent:'space-between'}}>
                  <Box sx={{marginY:'10px'}}>
                  <h1 className="logoText">
                    {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
                    Prasanna
                    </h1>
                    <h1 className="logoText" style={{marginLeft:'20px'}}>
                    {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
                   Tuladhar
                    </h1>
                  </Box>
                  <Box sx={{display: {  md: 'none' }}}>
                  <IconButton
                    sx={{marginRight:'7px'}}
                    edge="start"
                    color="inherit"
                    aria-label="close drawer"
                   
                    // onClick={toggleDrawer('top', true)}
                    onClick={() => dispatch(decrement())}
                    // onClick={() => alert('fsdfs')}
                    
                  >
                    <CancelOutlinedIcon sx={{margin:'0', padding:'0'}} fontSize='large'/>
                  </IconButton>
                  </Box>
                 
              </Box>
                    
             
              <List>
              <Box
                  sx={{justifyContent:'center',alignItem:'center',display: { xs: 'flex', md: 'none' },color: 'text.primary',marginBottom:'2rem'}}>
                 
                  </Box> 
                  <Box  sx={{  justifyContent:'center', marginBottom:'20px', display: { xs: 'flex', md: 'none' }, color: 'text.primary', }}>
                  <Box>
                  
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                     onClick={colorMode.toggleColorMode}
                     >
                     
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                     
                    </IconButton>
                    <IconButton  to="/cart"  component={NavLink} 
                      size="large"
                      aria-label="show 4 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                        <LocalMallIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      // onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                      <AccountCircle />
                      </Badge>
                    </IconButton>
                    
        
                  </Box>
                  </Box>
                {navData.map((text, index) => (
                  <>
                   <Divider />
                  <ListItem key={index} disablePadding>
                   
                    <NavLink onClick={() => dispatch(decrement())} to={`${text.link}`}  style={{textDecoration:'none',fontSize:'18px',width:'100%',color:'inherit'}} className={(navData)=>(navData.isActive?'textActive':'textInactive')}>
               
                    <ListItemButton style={{justifyContent:'space-between',}}>
                        <Box>{text.title}</Box>
                        <NavLink  to={`${text.link}`} style={{textDecoration:'none',}} className={(navData)=>(navData.isActive?'dotActive':'dotInactive')}>
                          <Brightness1Icon style={{fontSize:'14px'}}/>
                        </NavLink>
      
                  </ListItemButton>
                  </NavLink>
                  
                  </ListItem>
                   
                   </>
                ))}
                <Divider />
                
              </List>
              
              <Box sx={{  color: 'text.primary', display:'flex', justifyContent:'center'}} className='socialButton'>
                      
                      <IconButton size="large" aria-label="facebook" color="inherit">
                      
                          <FacebookIcon />
                        
                      </IconButton>
                      <IconButton size="large" aria-label="Twitter" color="inherit">
                      
                          <InstagramIcon />
                        
                      </IconButton>
                      <IconButton size="large" aria-label="Instagram" color="inherit">
                      
                      <TwitterIcon />
                    
                  </IconButton>
                      </Box>
      </Box>
    )
  }

   const action = useAppSelector((state)=>state.counter.value)

   

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const toggle = useAppSelector((state:any) => state.counter.value)
  

  const colorMode = React.useContext(ColorModeContext);
  const dispatch = useAppDispatch();
  
return (
  

  <>
     
      <Drawer
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className='drawerStyle'
        open={open}
        variant="permanent"
        anchor="left"
      >
         {drawerContentWeb(colorMode,action)}
      </Drawer>
      <Drawer
       className='drawerStyleSmall'
       sx={{
        display: { xs: 'flex', md: 'none' },
       
      }}
            anchor={'top'}
            open={toggle}
            onClose={() => dispatch(decrement())}
          >
          
         
            {drawerContentWeb(colorMode,dispatch)}
      </Drawer>
        
      {/* --------------------------- full width drawer ------------------------------ */}


      
      {/* {renderMobileMenu(colorMode,theme)} */}
      {/* {renderMenu} */}

   
      </>
      
  );
};


export default DrawerNav;
