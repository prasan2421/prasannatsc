import React from "react";
import { useEffect, useState, useRef } from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
import Footer from "../components/Footer";
import TextField from '@mui/material/TextField';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import Slider1 from "../components/Slider";
import { styled, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import prasannapng from '../assets/images/prasannapng.png';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Send from '@mui/icons-material/Send';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useSpring, animated } from '@react-spring/web';
import '../css/MainStyle.css';
import { default as Slider, Settings, CustomArrowProps } from "react-slick";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// carousel

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const images = [
  {
    label: 'San Francisco  Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  
];

// carousel end 

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step:any) => {
    setActiveStep(step);
  }; 

  const handleHireForm = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  

  const renderForm = (
    
    <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style}  component="form"
     
      noValidate
      autoComplete="off">
      <Container>
      <Box >
        <Box sx={{marginBottom:'20px'}}>
        <h1>Hire Me</h1>
        </Box>
        
      <TextField id="outlined-basic" label="Email" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'20px' }}/>
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="You are awesome!!"
          style={{display:'flex', width:'100%',marginBottom:'20px'}}
        />
        <Button sx={{display:'flex'}}>
          Send <Send />
        </Button>
      </Box>
    </Container>
      </Box>
    </Fade>
  </Modal>
  );

  const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider 
theme={theme}
>
    <Box sx={{margin:'20px', color: 'text.primary',}}>  
    {renderForm}
      <Container maxWidth="xl" className={theme.palette.mode === 'dark' ?"glass-panel":"glass-panel2"} sx={{borderRadius: '20px' ,boxShadow:'3',overflow:'hidden' }}>
      {/* Top banners */}
     
     <Card sx={{ flex:1 }}>
       <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Name: 
         </Typography>
         <Typography variant="h5" component="div">
          Prasanna Tuladhar
         </Typography>
         
       </CardContent>
       
     </Card>
     <Card sx={{ flex:1 }}>
       <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Education
         </Typography>
         <Typography variant="h5" component="div">
          Masters in Management Information Systems (Current)
         </Typography>
         <Typography variant="h5" component="div">
         Bachelor's of Science in Computer Science and Information Tenchnologies
         </Typography>
         
       </CardContent>
       
     </Card>
        {/* Top banners end*/}
      {/* <Slider /> */}
      {/* <Categories /> */}
      {/* <Products/> */}
      {/* <Newsletter/> */}
     
    </Container>
      </Box>
      </ThemeProvider>
  );
};

export default Home;
