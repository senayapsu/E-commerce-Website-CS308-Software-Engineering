import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import logo from "../assets/logo1.jpeg";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor() {
    super();
    var data = localStorage.getItem("user");
    console.log(data);
    if (data) {
      localStorage.setItem("isLoggedIn", true);
    }
    else {
      localStorage.setItem("isLoggedIn", false);
    }
  }

  render() {
    return (
    <div>
      <div className="Home" style={{backgroundColor: "#E6F4E6", display: "flex"}}>
        
          <Slider/>
        
      </div>
      <div>
      <Footer/>
    </div>
    </div>
    );
  }
}
