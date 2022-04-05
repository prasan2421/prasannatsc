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
      <Grid>
      <Box sx={{overflow:'hidden'}} >
        <Container maxWidth="lg" sx={{marginBottom:10}}>
      <Grid container alignItems="center"
       spacing={2}>
        <Grid item xs={12} sm={7}>
          <Box sx={{ color: 'text.primary',}} >
            <h4 color="inherit">Hello World!!</h4>
            
            <h1 style={{fontSize: '3rem',}}>I'm Prasanna Tuladhar</h1>
            <p>Front-end Developer</p>
          <p>Javascript | React.js | React Native</p>
          <Box  sx={{marginTop:'50px', flex:1, justifyContent:'left',display: 'flex' }}>
            <Button variant="outlined" onClick={handleOpen}><h3>Hire Me</h3></Button>
            <Link  component="button" sx={{display: 'flex' ,ml:5, alignItems:'center'}}
  variant="body2"  onClick={() => {
    console.info("I'm a button.");
  }}><h3>Download CV</h3><FileDownloadIcon/></Link>
          </Box>

          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box className="circle" style={{margin:'0 auto'}} >
          <Box className="circle2"  alignItems="center" style={{marginTop:'10px',marginLeft:'10px'}} >
          <img src={prasannapng} alt="Logo" height="350em" width="350em"/>
            </Box>
            </Box>
        </Grid>
      </Grid>
      </Container>
      {/* <Slider  className="mainSlider"
        asNavFor={nav2}
        ref={(slider1) => setNav2(slider1)}>
      {images.map((step, index) => (
              <div  style={{ borderRadius:'15px',overflow:'hidden'}} >
                
                  <Box
                    component="img"
                    sx={{
                      maxHeight: 300,
                      display: 'block',
                    objectFit:'cover',
                    
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
               
              </div>
            ))}
        </Slider> */}
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
         
          >
           
            {images.map((step, index) => (
              <div key={step.label+'1'} style={{ borderRadius:'15px',overflow:'hidden'}} >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      maxHeight: 300,
                      display: 'block',
                    objectFit:'cover',
                    
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
         style={{ background: 'transparent', boxShadow: 'none'}}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
      
        </Box>
        
      </Grid>
        {/* Top banners end*/}
      {/* <Slider /> */}
      {/* <Categories /> */}
      {/* <Products/> */}
      {/* <Newsletter/> */}
      {/* <Footer/> */}
    </Container>
      </Box>
      </ThemeProvider>
  );
};

export default Home;
