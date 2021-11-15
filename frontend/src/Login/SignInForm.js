import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";
import Facebook from "./Facebook";
import GoogleLoginComponent from "../googlebuttoncomponent";
import axios from "axios";
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      //name: "",
      email: "",
      password: "",
      //isAdmin: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
 
  signIn() {
    var body = {
      email: "daedd",
      password: "1238",
   };
    axios.post('https://dashboard.heroku.com/apps/cs308team', body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      
      <div className="formCenter" style={{ display: 'flex', justifyContent: 'center', padding: 100 }}>
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address:
            </label>
            <div style={{ margin: 10 }}> </div>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
            <label className="formFieldLabel" htmlFor="password">
              Password:
            </label>
            <div style={{ margin: 10 }}> </div>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField" style={{ margin: 20 }}>
            <button className="formFieldButton" onClick = {this.signIn}>Sign In</button>{" "}
            <Link to="/SignUp" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
            <Facebook/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
              <GoogleLoginComponent />
          </div>
        </form>
      </div>
          
      
    );
  }
}
export default SignInForm;