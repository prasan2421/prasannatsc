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


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



const drawerWidth = 150;
const drawerWidthFull = '100%';

type Anchor = 'top' ;



const navData=[
  {'title':'Home', 'link':'/'},
  {'title':'About', 'link':'/about'},
  {'title':'My Skills', 'link':'/projects'},
  {'title':'Work', 'link':'/projects'},
  {'title':'contact', 'link':'/projects'} ]


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
  (anchor: Anchor, open: boolean) =>
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
  

  const drawerContentWeb=(

<>
<Box sx={{  padding:'20px', height:'7rem'}}>
            
            <h1 className="logoText">
              {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
              Prasanna
              </h1>
              <h1 className="logoText" style={{marginLeft:'20px'}}>
              {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
             Tuladhar
              </h1>
        </Box>
              
       
        <List>
          {navData.map((text, index) => (
            <>
             <Divider />
            <ListItem key={index} disablePadding>
             
              <NavLink  to={`${text.link}`}  style={{textDecoration:'none',fontSize:'18px',width:'100%',color:'inherit'}} className={(navData)=>(navData.isActive?'textActive':'textInactive')}>
         
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
        
        <Box sx={{  color: 'text.primary'}} className='socialButton'>
                
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
</>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile';




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
         {drawerContentWeb}
      </Drawer>
      <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
          >
          
         
{drawerContentWeb}
      </Drawer>
        
      {/* --------------------------- full width drawer ------------------------------ */}


      
      {/* {renderMobileMenu(colorMode,theme)} */}
      {/* {renderMenu} */}

   
      </>
      
  );
};


export default DrawerNav;
