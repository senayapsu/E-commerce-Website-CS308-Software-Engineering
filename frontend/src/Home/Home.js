import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import logo from "../assets/logo1.jpeg"

export default class Home extends Component {
  render() {
    return (
      <div className="Home" style={{backgroundColor: "#E6F4E6"}}>
        <div className="lander">
          <h1 style={{color: "#0A550E"}}>Welcome to LAPSS</h1>
          <img src={logo} height={600} width={1000} />
          <p>Your best Web Application</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Our Products</Button>
          </form>
         
        </div>
      </div>
    );
  }
}
