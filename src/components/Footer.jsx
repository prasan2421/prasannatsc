import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  LinkedIn,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Toolbar,Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { borderBottom } from "@mui/system";
import Button from '@mui/material/Button';

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;




const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container maxWidth="xl" >
      <Box sx={{ color: 'text.primary',display:'flex', justifyContent:"center"}}>
        <Box sx={{fontSize:'44px', fontWeight:'bold', margin:'20px'}}>Let's talk</Box>

      </Box>
<Grid container sx={{borderBottom:'1px solid #595959', paddingBottom:'50px'}}>

<Grid item xs={12} sm={4} 
       >
       
        <Box sx={{ color: 'text.primary',display:'flex', justifyContent:"center",}}>
        <h3 style={{borderBottom:'1px solid #797979',padding:'5px'}}>tuladharprasan@gmail.com</h3>
       
        
               
    </Box>
       

</Grid>

<Grid item xs={12} sm={4} sx={{display:'flex', justifyContent:'center'}}
       >
      
        <Box sx={{ color: 'text.primary',display:'flex', justifyContent:"center", alignItems:'center', }}>
                
               
                <Button variant="outlined" sx={{borderRadius:'10px', padding:'10px 20px 10px 20px', }}>Get a quote</Button>
                    
                </Box>
        
</Grid>  
<Grid item xs={12} sm={4} sx={{display:'flex', justifyContent:"center"} }
       >
        <Box sx={{ color: 'text.primary',display:'flex',  alignItems:'center'}}>
          <Phone style={{marginRight:"10px", fontSize:'40px'}}/>
          <Box>
          <Box sx={{borderBottom:'1px solid #797979'}}> +47 96708761</Box>
          <Box sx={{justifyContent:'center', display:'flex', fontSize:'12px'}}>Norway</Box>
          </Box>
        
      
        
               
    </Box>
        
</Grid> 
    
    
</Grid>

<Box sx={{display:'flex', justifyContent:"center", margin:'30px 0 30px 0', alignItems:'center'}}>
         
            <Facebook sx={{fontSize:'44px', ':hover': {color: '#3b5998',},}} /> 
            <Box sx={{fontSize:'64px', fontWeight:200, marginRight:'20px', marginLeft:'20px', color:'#797979'}}>/</Box>
            <Instagram sx={{fontSize:'44px', ':hover': {color: '#FD1D1D',}}}/> 
            <Box sx={{fontSize:'64px', fontWeight:200, marginRight:'20px', marginLeft:'20px', color:'#797979'}}>/</Box>
            <Twitter sx={{fontSize:'44px', ':hover': {color: '#00acee',}}}/>
            <Box sx={{fontSize:'64px', fontWeight:200, marginRight:'20px', marginLeft:'20px', color:'#797979'}}>/</Box>
            <LinkedIn sx={{fontSize:'44px', ':hover': {color: '#0072b1',}}}/>
         
        </Box>
</Container>
  );
};

export default Footer;
