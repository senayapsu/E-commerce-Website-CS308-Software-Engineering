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
    justify-content: space-around;
`;
const ProductName = styled.span`
    
`;
const ProductId = styled.span`
    
`;
const ProductDescription = styled.span`
    
`;
const ProductCategory = styled.span`
    
`;
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center; 
    justify-content: center;
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
const SummaryTitle = styled.h1`
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
//http://localhost:3003/get_single_product?product_name=... 


const getProduct = async (what) => {
    var res = await axios.get('http://localhost:3003/get_single_product?product_id='+what);
    return res.data;
  };

const ProductDetailPage = (props) => {
    const path_text=window.location.pathname[1,-1];
    console.log(window.location.pathname[1,-1]);
    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);
    //const productId= props.match.params.productId;

    useEffect(() => {
        console.log("useEffect");
        getProduct(path_text).then(
          (res) => setApiResponse(res));
      }, [dummy])
  
  
    return (
        <Container>
            {apiResponse.map((product) => (
            <Wrapper>
                <Title>Product Details</Title>
                <Top>
                    <form action="/Products" method="get">
                      <TopButton>Back to Products</TopButton>
                    </form>
                    
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail> 
                                <Image src = "https://cdn.pixabay.com/photo/2018/07/01/21/50/table-3510523__340.jpg"/>
                                <Details>
                                    <ProductName>
                                        <b> Product: </b> {product.name}
                                    </ProductName>
        
                                    <ProductId>
                                        <b> ID: </b> {product._id}
                                    </ProductId>
                                    <ProductCategory>
                                        <b>Category:</b> Furniture
                                    </ProductCategory>
                                    <ProductDescription>
                                        <b>Description:</b> 6 Chairs and 1 table made of steel and original wood.
                                    </ProductDescription>
                                </Details>
                            </ProductDetail> 
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IconButton aria-label = "Add to Cart">
                                        <AddShoppingCart/>
                                    </IconButton>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        
                    </Info>
                    <Summary>
                    <SummaryTitle>Similar Products</SummaryTitle>
                    <SummaryItem>
                        <Info>
                        <Product>
                            <ProductDetail> 
                                <RightPanImage src = "https://as1.ftcdn.net/v2/jpg/03/28/06/16/1000_F_328061651_MKKj6BM3mVlpIJHQ6b4gWdDXCO1Rawyn.jpg"/>
                                <Details>
                                    <ProductName>
                                        <b> Product: </b> Wooden Bench
                                    </ProductName>
                                </Details>
                            </ProductDetail> 
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>1</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    </SummaryItem>
                    <form action="/Products3" method="get">
                        <SummaryButton>See Similar Products</SummaryButton>
                    </form>
                    
                    </Summary>
                </Bottom>
            </Wrapper>
            ))}
        </Container>
    )
}
export default ProductDetailPage;