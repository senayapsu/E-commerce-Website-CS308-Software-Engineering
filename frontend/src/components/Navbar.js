import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import logo from "../assets/logo2.jpeg"


const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar style = {{backgroundColor: "#0F5A34"}} expand="-xl" variant="dark" height= '100px'>
            <Navbar.Brand href="/">
            <img
                src = {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            LAPSS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About Us</Nav.Link>
                    <Nav.Link href="/Search">Search</Nav.Link>
                    <Nav.Link href="/Products">Products</Nav.Link>
                    <Nav.Link href="/">Design Ideas</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Products">Likes</Nav.Link>
                    <Nav.Link href="/Products">Cart</Nav.Link>
                </Nav>
                

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);