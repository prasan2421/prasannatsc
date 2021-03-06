import styled from "styled-components";
// import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import { popularProducts } from "../data";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Product from "../components/Product";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



// const Container = styled.div``;

const Shop = [
  {
    id:1,
    text:'Hello !',
  },
  {
    id:2,
    text:'Hello there !!',
  },
  {
    id:3,
    text:'Hello again !!!',
  },
  
  
]

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e:any) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container maxWidth="xl">
      {/* <Navbar /> */}
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Asc</Option>
            <Option value="desc">Desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* <Products cat={cat} filters={filters} sort={sort} /> */}
      <Container maxWidth="lg">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >

{Shop.map((item) => (
       <Card sx={{ flex:1 }}>
       <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Word of the Day
         </Typography>
         <Typography variant="h5" component="div">
          {item.text}
         </Typography>
         
       </CardContent>
       <CardActions>
         <Button size="small">Add to Cart</Button>
       </CardActions>
     </Card>
        // <Product item={item} key={item.id} />
      ))}
     
      
    </Box>
    </Container>

    {/* <Products/> */}
      {/* <Newsletter /> */}
     
    </Container>
  );
};

export default ProductList;
