import React from "react";

import { useEffect, useState, useRef,useMemo, useCallback } from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";

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
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Backdrop from '@mui/material/Backdrop';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Send from '@mui/icons-material/Send';
import Zoom from '@mui/material/Zoom';

// import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import Button, { ButtonProps } from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import InterestsIcon from '@mui/icons-material/Interests';
import { useSpring, animated } from '@react-spring/web';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../css/MainStyle.css';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import TagSphere from "../components/wordSphere";
import MyMaps from "../components/maps";
import { GoogleMap,LoadScript, useLoadScript, Marker } from "@react-google-maps/api";

 // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


const blogData=[
  {'topic':'Javascript', 'title':'React', 'subtitle':'This is a demo summary.', 'color':'red'},
  {'topic':'Javascript','title':'React Native', 'subtitle':'This is a demo summary.', 'color':'green'},
  {'topic':'Web designing','title':'UI/UX', 'subtitle':'This is a demo summary.', 'color':'#81D8F7'},
  {'topic':'Business development','title':'E-commerce', 'subtitle':'This is a demo summary.', 'color':'yellow'},
  {'topic':'Business growth','title':'Growth Hacking', 'subtitle':'This is a demo summary.', 'color':'cyan'} ]

const portfolioArray= [
    {
      id: 0,
      nome: "Venus",
      valor: 15000.00,
      imageUrl:
        "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale",
      quantidade: 0,
    },
    {
      id: 1,
      nome: "Marte",
      valor: 10000.00,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
      quantidade: 0,
    },
    {
      id: 2,
      nome: "Saturno",
      valor: 5000.00,
      imageUrl:
        "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg",
      quantidade: 0,
    },
    {
      id: 3,
      nome: "Jupiter",
      valor: 135000.00,
      imageUrl:
        "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
      quantidade: 0,
    },
    {
      id: 4,
      nome: "Asgard",
      valor: 95500.00,
      imageUrl:
        "https://fastly.4sqi.net/img/general/200x200/14230145_7d_kRyBPk1F4jYm4tiVGLHR66Yn7WoHctHd53HIuRpo.jpg",
      quantidade: 0,
    },
    {
      id: 5,
      nome: "Dagobah",
      valor: 90000.00,
      imageUrl: "https://f4.bcbits.com/img/a0980289374_10.jpg",
      quantidade: 0,
    }]


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
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomButton = styled(Button)({
 
 padding:'1rem 3rem 1rem 3rem'
});



const Home = () => {
  const theme = useTheme();
  const [checkedZoom, setCheckedZoom] = React.useState(null);
  const [mouseOverItem, setMouseOverItem] = React.useState(null);
  
  const [checkedImage, setCheckedImage] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  
  // const colorMode = React.useContext(ColorModeContext);
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
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

  // const handleStepChange = () => (
  //   setCheckedZoom(true)
  // )
   
  // const handleHireForm = () => (
  //   setCheckedZoom(false)
  // );

  

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
        <h1>Contact Me</h1>
        </Box>
        
        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width:'50%', marginBottom:'10px' , paddingRight:'5px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'50%', marginBottom:'10px',paddingLeft:'5px' }}/>

                        <TextField id="outlined-basic" label="Subject" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'10px' }}/>
                        <TextField
                        id="outlined-basic" label="Message" variant="outlined"
                      
                            multiline
                            rows={4}
                            // defaultValue="You are awesome!!"
                            style={{display:'flex', width:'100%',marginBottom:'20px'}}
                          />      <TextField
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const containerRef = React.useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD52vW7Nc0Dxavo8s5wd_uaPjLr8SuWYJM',
  });

  if (!isLoaded) return <div>Loading...</div>;

  

  // const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  const handlePopoverOpen = (index:any) => {
    setMouseOverItem(index)
  };
 

  return (
    <ThemeProvider 
theme={theme}
>

    <Box component="main"  sx={{ color: 'text.primary', flexGrow:1, }}>  
    <Box className='ContainerWrapper'>{'<html>'}</Box>
    {renderForm}
    <Box>
    <Alert severity="info" sx={{justifyContent:'center',display:'flex'}}>Portfolio under construction !!</Alert>
      {/* -------------------------------------------- first grid --------------------------------------------------- */}
    <Grid container style={{height:'100vh',paddingLeft:'4.5rem'}}>  
    
        <Grid item xs={12} style={{display:'flex', alignItems:'center'}}>
            <Slide direction="up" in={checked} container={containerRef.current}>
              <Box sx={{ color: 'text.primary'}} >
            <Box className="introText">
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
                <h1> Hi, </h1>
              </Grow>
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <h1>I'm Prasanna,</h1>
              </Grow>
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }} className='introTextLast'
                  {...(checked ? { timeout: 2000 } : {})}>
                      <h1>web & mobile developer</h1>
              </Grow>
             
              
            </Box>
            <Box className='subTitle'><p>Front End developer</p></Box>
            <Box  sx={{marginTop:'50px', }}>
                    <CustomButton variant="outlined" onClick={handleOpen}>Contact Me</CustomButton>
                  </Box>
                <Box>
                </Box>
              </Box>
              </Slide>
        </Grid>
    </Grid>
          {/* -------------------------------------------- first grid end --------------------------------------------------- */}

      {/* -------------------------------------------- Second grid --------------------------------------------------- */}

    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'3rem',paddingBottom:'10rem'}}>
      <Box className="back-text">WORK</Box>
      <Grid container sx={{paddingLeft:'4.5rem', marginBottom:'5rem'}}>
        <Grid item xs={12} md={8}>
      <Slide direction="up" in={checked} container={containerRef.current}>
              <Box sx={{ color: 'text.primary'}} >
            <Box className="PortfolioTitle">
              
              <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                  {...(checked ? { timeout: 1000 } : {})}>
                      <h1>My Portfolio</h1>
              </Grow>
             
            </Box>
            <Box className='subTitle'>
              <p>A small gallery of recent projects chosen by me. I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.</p>
              <p>Interested to see some more? Visit my work page.</p>
              </Box>
                <Box >
                </Box>
              </Box>
              </Slide>
        </Grid>
        <Grid item xs={12} md={4} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       
                    <CustomButton variant="outlined" onClick={handleOpen}>See more!</CustomButton>
                 
        </Grid>
        </Grid>
        <Grid container className="portfolioGallary">
       
        {portfolioArray.map((text, index) => (
          <Grid item xs={6} md={2.4} >
          <Card >
          <CardActionArea 
         
         onMouseEnter={()=>handlePopoverOpen(index)}
         onMouseLeave={()=>handlePopoverOpen(null)} 
                          sx={{position:'relative'}} >
            <CardMedia
            className='media'
              component="img"
              image={`${text.imageUrl}`}
              
            />
           
            { mouseOverItem==index?(
                <Zoom in={true}>
              <Box
             
             className='PortfolioItemWrapper'>
                           <Box className='ViewProject'>
                             <p>View</p>
                             <p>Project</p>
                           </Box>
               
             </Box>
             </Zoom> 
            ):null}
            
            
         
          </CardActionArea>
          
          
        </Card>
             </Grid>
          ))}
                 
        </Grid>
    </Box>

          {/* -------------------------------------------- Second grid end --------------------------------------------------- */}
         
          {/* -------------------------------------------- Third grid --------------------------------------------------- */}

          <Box style={{position:'relative', overflow: 'hidden', paddingTop:'5rem',paddingBottom:'10rem'}}>
          <Box className="back-text-third">Blog</Box>
                <Grid container sx={{paddingLeft:'4.5rem', marginBottom:'5rem'}}>
                  <Grid item xs={12} md={6}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                        <Box sx={{ color: 'text.primary'}} >
                      <Box className="PortfolioTitle">
                        
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}>
                                <h1>Me, Myself and I</h1>
                        </Grow>
                      
                      </Box>
                      <Box className='subTitle'>
                        <p>Since Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as standards of the current web I've veen passionate about web.</p>
                        <p>For over a decade I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people..</p>
                        <p>I currently work remotely with a selected freelance client base being open for new opportunities.</p>
                        </Box>
                          <Box>
                          </Box>
                        </Box>
                        </Slide>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                
                              <TagSphere/>
                          
                  </Grid>
                  </Grid>
                  
              </Box>

          {/* -------------------------------------------- Second grid end --------------------------------------------------- */}
    
          {/* -------------------------------------------- Fourth grid --------------------------------------------------- */}
   
   <Container maxWidth="xl" sx={{marginTop:'-5rem'}}>
     <Grid container > 
     {blogData.map((text, index) => (
      <Grid xs={4} >
        <Card sx={{margin:'7px', borderTop:`2px solid  ${text.color}`}}>
          <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={`${text.color}`}>
                {text.topic}
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {text.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {text.subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
     ))}
     </Grid>
     <Box sx={{justifyContent:'center', display:'flex', margin:'2rem'}}>
     <Link href="#" underline="none" >
        See all articles.....
      </Link>
      </Box>
   </Container>
   
          {/* -------------------------------------------- Fourth grid end--------------------------------------------------- */}
    
    {/* -------------------------------------------- Fifth grid --------------------------------------------------- */}
   
    <Box style={{position:'relative', overflow: 'hidden', paddingTop:'5rem',}}>
          
                <Grid container sx={{paddingLeft:'4.5rem',}} spacing={4}>
                  <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                <Slide direction="up" in={checked} container={containerRef.current}>
                        <Box sx={{ color: 'text.primary'}} >
                      <Box className="PortfolioTitle">
                        
                        <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}>
                                <h1>Contact me</h1>
                        </Grow>
                      
                      </Box>
                      <Box className='subTitle'>
                        <p>I'm interested in freelance opportunities- especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
                        </Box>
                        <Box className='formBelow'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width:'50%', marginBottom:'10px' , paddingRight:'5px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'50%', marginBottom:'10px',paddingLeft:'5px' }}/>

                        <TextField id="outlined-basic" label="Subject" variant="outlined" style={{display:'flex', width:'100%', marginBottom:'10px' }}/>
                        <TextField
                        id="outlined-basic" label="Message" variant="outlined"
                      
                            multiline
                            rows={4}
                            // defaultValue="You are awesome!!"
                            style={{display:'flex', width:'100%',marginBottom:'20px'}}
                          />
                          <Box  sx={{display:'flex', justifyContent:'flex-end'}}>
                          <Button variant="outlined">
                        Send message ! 
                      </Button>
                          </Box>
                      
                        </Box>
                          <Box>
                          </Box>
                        </Box>
                        </Slide>
                  </Grid>
                  <Grid item xs={12} md={6} >
                
                  <MyMaps/>
                  </Grid>
                  
                  </Grid>
                  <Box className='ContainerWrapper-base'>{'</html>'}</Box>
              </Box>
   
          {/* -------------------------------------------- Fifth grid end--------------------------------------------------- */}
   
    </Box>
      
     
      {/* Grid */}
     
      
      {/* -------------------------   ------------ Carousel start ----------- -------------------------- */}
        
            {/* -------------------------   ------------ Carousel end ----------- -------------------------- */}
      
        
     
        {/* Top banners end*/}
      {/* <Slider /> */}
      {/* <Categories /> */}
      {/* <Products/> */}
      {/* <Newsletter/> */}
   
    
    
          
      </Box>
      
      </ThemeProvider>
  );
};

export default React.memo(Home);
