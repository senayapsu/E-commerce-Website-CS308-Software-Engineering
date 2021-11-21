import { FullscreenExitTwoTone } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import useState  from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import logo from "../assets/logo1.jpeg";
import{sliderItems} from "../data";
const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background-color: transparent;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: white;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center; 
    position: absolute; 
    top: 0;
    bottom:0;
    left: ${props=> props.direction === "left"&&"10px"};
    right: ${props=> props.direction === "right"&&"10px"};

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;  
`;
const Slide =  styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props=> props.bg};
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`;
const Wrapper =  styled.div`

    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=> props.slideIndex *-100}vw);
`;
const Title =  styled.h1`
    font-size: 70px;
`;
const Desc =  styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weigth: 500;
`;
const Button =  styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

export const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if(direction === "left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else
        {
           setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0); 
        }
    };
    return (
        <Container>
            <Arrow direction= "left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg = {item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <form action="/Products" method="get">
                        <Button>Our Products</Button>
                        </form>
                    </InfoContainer>
                </Slide>
                ))}
                
               
            </Wrapper>
            <Arrow direction= "right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
export default Slider;