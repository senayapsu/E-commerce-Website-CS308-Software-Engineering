import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import logo from "../assets/logo1.jpeg";
import Slider from "../components/Slider";

export default class Home extends Component {
  render() {
    return (
      <div className="Home" style={{backgroundColor: "#E6F4E6"}}>
        <Slider/>
      </div>
    );
  }
}
