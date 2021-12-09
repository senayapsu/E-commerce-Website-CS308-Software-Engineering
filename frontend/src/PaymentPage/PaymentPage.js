import React, {Component} from 'react';
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import { Event } from '@material-ui/icons';
import swal from "sweetalert";


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
    background-color: red;
    color: white;
    font-weight: 600;
`;

class PaymentPage extends Component {
    constructor(props) {
      super(props);
  
      this.completeOrder = this.completeOrder.bind(this);
  
    }


    completeOrder()
    {
        swal("Your payment is completed", "Enjoy your product!")
            .then(() => {
                window.location.reload();
            });
    }


    render(){
        return (
            <Container>
                <Wrapper>
                    <Title>PAYMENT</Title>
                    <Top>
                        <form action="/CartPage" method="get">
                            <TopButton>BACK TO CART</TopButton>
                        </form>
                        
                        
                        
                        <TopButton type = "filled"> CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                        <h4 style={{ display: 'flex', justifyContent: 'left', padding: 20, color: "#83A092" }}>Address Information</h4>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="recipient_name">
                            Recipient Name
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="text"
                            id="recipient_name"
                            className="formFieldInput"
                            placeholder="Enter recipient name"
                            name="recipient_name"
                            />
                        </div>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="address">
                            Address 
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="text"
                            id="address"
                            className="formFieldInput"
                            placeholder="Enter address"
                            name="address"
                            />
                        </div>
                        <h4 style={{ display: 'flex', justifyContent: 'left', padding: 20, color: "#83A092" }}>Payment</h4>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="card_owner">
                            Card Owner
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="text"
                            id="card_owner"
                            className="formFieldInput"
                            placeholder="Enter card owner"
                            name="card_owner"
                            />
                        </div>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="card_number">
                            Card Number 
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="number"
                            id="card_number"
                            className="formFieldInput"
                            placeholder="Enter card number"
                            name="card_number"
                            />
                        </div>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="expire_date">
                            Expire Date 
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="number"
                            id="expire_date"
                            className="formFieldInput"
                            placeholder="MM/YY"
                            name="expire_date"
                            />
                        </div>
                        <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
                            <label className="formFieldLabel" htmlFor="cvc">
                            CVC 
                            </label>
                            <div style={{ margin: 10 }}> </div>
                            <input
                            type="number"
                            id="cvc"
                            className="formFieldInput"
                            placeholder="Enter CVC"
                            name="cvc"
                            />
                        </div>
                        </Info>
                        <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton onClick={this.completeOrder}>COMPLETE ORDER</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        )
    }
}
export default PaymentPage;