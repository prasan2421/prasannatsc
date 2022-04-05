// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
import * as React from 'react';
import { useState } from "react";
// import styled from "styled-components";

// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { makeStyles } from '@mui/styles';

import { styled, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import Stack from '@mui/material/Stack';

import { red } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import { SwipeableDrawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../css/Header.css';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const drawerWidth = 240;

function ElevationScroll(props:any) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const blue2 = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};


const CustomButtonRoot2 = styled('span')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  
  font-weight: bold;
  font-size: 0.875rem;
  border: 0.2rem solid rgba(0, 0, 0, 0);
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  

  &:hover {
    
    color: white;
    border: 0.2rem solid #fff;
   
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 0.5rem #bc13fe,
    0 0 0.7rem #bc13fe,
    0 0 0.9rem #bc13fe,
    inset 0 0 0.8rem #bc13fe; 
    text-shadow:
    0 0 0.5px #fff,
    0 0 1px #fff,
    0 0 1.5px #fff,
    0 0 30px #5271ff,
    0 0 50px #5271ff,
    0 0 60px #5271ff,
    0 0 70px #5271ff,
    0 0 80px #5271ff;
}
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue2[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,);

function CustomButton2(props:any) {
  return (
  
  <CustomButtonRoot2  {...props} className={'insideActive'}  />
  
  )}

const useStyles = makeStyles(theme =>({
  activeList: {
    "&.active": {
      background:'red',
    }
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Navbar = (props:any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleProfileMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event:any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (colorMode:any, theme:any) => (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={colorMode.toggleColorMode}>
      <IconButton size="large" aria-label="Theme" color="inherit" >
                
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
             
              <p>{theme.palette.mode ==='dark'? 'Light': 'Dark'}</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const matches = useMediaQuery('(min-width:600px)');
  const [homeStyle, setHomeStyle] = useState(false);
  const classes = useStyles();
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  
  

return (
  <ColorModeContext.Provider value={colorMode}>
<ThemeProvider 
theme={theme}
>

    <Box sx={{ display:'flex', overflow:'hidden' , }}>
    <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="relative" open={open} style={{ background: 'transparent', boxShadow: 'none'}}
        // color="dark"  
        // enableColorOnDark
        >
        
          <Toolbar sx={{maxWidth: 'xl', width:'100%', margin:'0 auto'}} >
            
            <Box
            sx={{flex:1, justifyContent:'left',display: { xs: 'flex', md: 'none' }}}>
           <IconButton
            
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{  ...(open && { display: 'none' }) }}
              onClick={handleDrawerOpen}
              
            >
              <MenuIcon />
            </IconButton>
            
            
            </Box>
            <Box sx={{flex:1, justifyContent:'left',display: { xs: 'none', md: 'flex' },  color: 'text.primary',}}>
            
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
            <Box
             
              sx={{ flex: 1, textAlign:'center',margin:'10px',color: 'text.primary',}}
            >
             
              {/* <h1 className="neonText"> */}
              <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}>
              Prasanna  Tuladhar
              </h1>
            </Box>
            
          <Box  sx={{ flex:1, justifyContent:'right', display: { xs: 'none', md: 'flex' }, color: 'text.primary', }}>
            <Box>
            
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                <AccountCircle />
                </Badge>
              </IconButton>
              
  
            </Box>
            </Box>
            
            <Box sx={{ flex:1, justifyContent:'right',display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
           
          </Toolbar>
          {matches ?

          // Navigation bar

          <Toolbar 
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'center', overflowX: 'auto', color: 'text.primary', }}>
          
          <List  sx={{marginLeft:'5px',marginRight:'5px',margin:'10px'}} >
              <NavLink  to="/"  style={{textDecoration:'none'}} className={(navData)=>(navData.isActive?'textActive':'')}>
                <CustomButton2 >HOME</CustomButton2>
              </NavLink>
              
          </List>

          <List  sx={{marginLeft:'5px',marginRight:'5px'}} >
          <NavLink  to="/products"  style={{textDecoration:'none'}} className={(navData)=>(navData.isActive?'textActive':'')}>
                <CustomButton2 >About Me</CustomButton2>
              </NavLink>
          </List>
        
        
            </Toolbar>
            
            // Navigation bar end
            
            :null}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Drawer
        sx={{
        
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top:10,
            left:9,
            bottom:10,
            // backgroundColor:'#4e1e1e',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <Divider />

        <List sx={{textAlign:'center'}} >
            <NavLink to="/"  style={{textDecoration:'none'}} className={(navData)=>(navData.isActive?'textActive':'')}>
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
                <CustomButton2 >HOME</CustomButton2>
              </NavLink>
           
        </List>

        <List sx={{textAlign:'center'}} >
              <NavLink  to="/products"  style={{textDecoration:'none'}} className={(navData)=>(navData.isActive?'textActive':'')}>
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
                <CustomButton2 >About Me</CustomButton2>
              </NavLink>
           
        </List>
       
      </Drawer>
      {renderMobileMenu(colorMode,theme)}
      {renderMenu}
    </Box>
  </ThemeProvider> 
  </ColorModeContext.Provider>
  );
};


export default Navbar;
