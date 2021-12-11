import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; // it is an icon from '@material-ui/icons'
import axios from "axios";
import background from '../assets/soft.jpg';
import Categories from "../components/Categories"
import {Grid} from "@material-ui/core";
//import Product from '../components/Products/Product/Product';
//import useStyles from "../components/Products/Product/styles";

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 20px;
`;
const Title =  styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    
    display: flex;
    align-items: center; 
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black": "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
    
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 500px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    
`;
const ProductName = styled.h6`
    
`;
const ProductId = styled.h6`
    
`;
const ProductDescription = styled.h6`
   
`;
const ProductCategory = styled.h6`
    
`;
const PriceDetail = styled.span`
    
    display: flex;
    
    flex-direction: column;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center; 
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24;
  margin: 5px;  
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Hr = styled.hr`
background-color: gray;
border: none;
height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    hight: 50vh;
`;
const SummaryTitle = styled.h3`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const SummaryItemText = styled.span`
    flex: 1;
`;
const SummaryItemPrice = styled.span`
    flex: 1;
`;
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const RightPanImage = styled.img`
    width: 170px;
    height: 85px;
`;
//http://localhost:3003/get_single_product?productId=... 

var  product_array=[];
const getProduct = async (what) => {
    var res = await axios.get('http://localhost:3003/get_single_product?productId='+what);
    product_array.push(res.data);
    return product_array;
  };

  
const ProductDetailPage = (props) => {
    const path_text=window.location.pathname.substring(1,);
    console.log(window.location.pathname.substring(1,));
    const [apiResponse, setApiResponse] = useState([]);
   
    const productId= props.match.params.productId;

    useEffect(() => {
        console.log("useEffect");
        getProduct(path_text).then(
          (res) => setApiResponse(res));
      })
    
    var category_str="";
    var product_category=""
    apiResponse.map((product) => (
        product_category=product.category
      ))
      if ("Furniture"==product_category) {
        category_str="/Products3"
      }else if("Garden"==product_category){
          category_str="/Products2"
      }else if("Flowers"==product_category){
          category_str="/Products1"
      }

      
    return (
        <Container >
             {apiResponse.map((product) => (
            <Wrapper >
                <Title>{product.name}</Title>
                <Top>
                    <form action="/Products" method="get">
                      <TopButton>Back to Products</TopButton>
                    </form>
                    
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail> 
                                <Image src = {product.image}/>
                                <Details>
                                    <ProductName>
                                        <b> Product: </b> {product.name}
                                    </ProductName>
                                    <br></br>
                                    <ProductId>
                                        <b> ID: </b> {product._id}
                                    </ProductId>
                                    <br></br>
                                    <ProductCategory>
                                        <b>Category:</b> {product.category}
                                    </ProductCategory>
                                    <br></br>
                                    <ProductDescription>
                                        <b>Description:</b> {product.description}
                                    </ProductDescription>
                                </Details>
                            </ProductDetail> 
                            <PriceDetail>
                            <form action={category_str} method="get">
                                <SummaryButton>See more {product_category}</SummaryButton>
                            </form>
                            <br></br>
                                <ProductAmountContainer>
                                <IconButton aria-label = "Add to Cart" onClick={() => {
                                    var user = JSON.parse(localStorage.getItem("user"));

                                    if (user == null) {
                                        swal("Error!", "You must login first!", "error");
                                        console.log("you are not logged in");
                                        return;
                                    }

                                    swal("+1", "The item is added to your cart!", "success");
                                    var res = axios.post('http://localhost:3003/add_product_to_cart', {
                                        "name": product.name,
                                        "email": user.email,
                                    })
                                    console.log(res);
                                    return res.data;

                                    }}>
                                    <AddShoppingCart/> 
                                </IconButton>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price}</ProductPrice>
                                
                            </PriceDetail>
                           
                        </Product>
                        
                    </Info>
                                        
                </Bottom>
            </Wrapper>
             ))}
        </Container>
    )
}
export default ProductDetailPage;
