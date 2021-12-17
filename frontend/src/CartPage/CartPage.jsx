import React, {useState, useEffect} from "react";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import axios from "axios";
import {IconButton} from '@material-ui/core';
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
    width: 200px;
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

var user = JSON.parse(localStorage.getItem("user"));

var totalPrice = 0;

const discardCart = async (what) => {
    
    console.log(user);
    if (user == null) {
        swal("Error!", "You must login first!", "error");
        console.log("you are not logged in");
        return;
    }
    var res = await axios.post('http://localhost:3003/discard_cart_product', {
        "name": what,
        "email": user.email,
    })
    swal(":(", "Discarded!", "success").then(()=> {
        window.location.reload();
    });
    console.log(res);
    return res.data;
    
  };
const getProducts = async () => {
    const res = await axios.post("http://localhost:3003/cart", 
    {
        "email": user.email,
    })
    console.log(res.data);
    return res.data;
};

const setProduct = (count, name) => {
    var res = axios.post('http://localhost:3003/discard_cart_product', {
        "name": name,
        "email": user.email,
    }).then(r => {
        console.log("discarded");
        if (count > 0) {
            axios.post('http://localhost:3003/add_cart_quantity', {
                "name": name,
                "email": user.email,
                "number": count,
            }).then(() => {
                window.location.reload();
            })
        } else {
            swal(":(", "Discarded!", "success").then(()=> {
                window.location.reload();
            });
        }
    })
}

const getTotalPrice = (products) => {
    let total = 0;
    products.forEach(product => {
        total += product.price*product.cart_counter;
    });
    localStorage.setItem("cartTotal", total);
    return total;
} 

const CartPage = () => {
    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);

    useEffect(() => {
      getProducts().then(
        (res) => setApiResponse(res));
    }, [dummy])
    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <form action="/Products" method="get">
                      <TopButton>CONTINUE SHOPPING</TopButton>
                    </form>
                    
                    <TopTexts>
                        <TopText>Shopping Bag</TopText>
                        
                    </TopTexts>
                    <TopButton type = "filled"> CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Hr/>
                {apiResponse.map((product)=>(
                        <Product>
                            <ProductDetail> 
                                <Image src = {product.image}/>
                                <Details>
                                    <ProductName>
                                        <b> Product: </b> {product.name}
                                    </ProductName>
        
                                    <ProductId>
                                        <b> Category: </b> {product.category}
                                    </ProductId>
                                </Details>
                            </ProductDetail> 

                            <PriceDetail>
                                <ProductAmountContainer>
                                <IconButton><AddIcon onClick = {() => {setProduct(product.cart_counter+1, product.name); setDummy(dummy+1)}}/></IconButton>
                                    
                                    <ProductAmount>{product.cart_counter}</ProductAmount>
                                    <IconButton><RemoveIcon onClick = {() => {setProduct(product.cart_counter-1, product.name); setDummy(dummy+1)}}/></IconButton>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price*product.cart_counter}</ProductPrice>
                            </PriceDetail>
                            
                        </Product>
                        ))}
                        <Hr/>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>${getTotalPrice(apiResponse)}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5</SummaryItemPrice>
                    </SummaryItem>
                    <form action="/Payment" method="get">
                        <SummaryButton>BUY</SummaryButton>
                    </form>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}
export default CartPage;