import React, { Component } from "react";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";
import GoogleLoginComponent from "../googlebuttoncomponent";
import axios from "axios";
import background from '../assets/soft.jpg';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    axios
      .post('http://localhost:3003/add_user',
        {
          "username": "as",
          "profile_image": "asef.jpeg",
          "name": "des",
          "email": this.state.email,
          "password": this.state.password,
          "isAdmin": false
        })
        .then(response => {
          console.log("in response");
          console.log(response);
          /*
          if (response) { // backend den gelen mesaji kontrol et
            this.props.handleSuccess
          }
          */
          this.props.history.push("/");
        }
        )
        .catch(function (error) {
          console.log("in error");
          console.log(error.response.data);
        });
  }
 
  signIn() {
      
    }
  render() {
    return (
      
      <div className="formCenter" style={{ display: 'flex', justifyContent: 'center', padding: 70 }}>
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center', padding: 20, color: "#83A092" }}>Welcome to LAPPS</h1>
       
        <form className="formFields" onSubmit={this.handleSubmit} style={{backgroundImage:`url(${background})`, padding: 80}}>
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
          
            <button className="formFieldButton" type="submit">Sign In</button>{" "}

            
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
      </div>
          
      
    );
  }
}
export default SignInForm;