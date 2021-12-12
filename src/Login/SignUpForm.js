import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from '../assets/soft.jpg';
import swal from "sweetalert";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);

    if(this.state.hasAgreed && this.state.name !="" && this.state.email !="" && this.state.password !="") {
      
    axios
      .post('http://localhost:3003/add_user',
        {
          "username": this.state.name,
          "name": this.state.name,
          "email": this.state.email,
          "password": this.state.password,
        })
        .then(response => {
          console.log("in response");
          console.log(response);
          /*
          if (response) { // backend den gelen mesaji kontrol et
            this.props.handleSuccess
          }
          */
          this.props.history.push("/Login");
        }
        )
        .catch(function (error) {
          console.log("in error");
          console.log(error.response.data);
        });
      }
      else if (this.state.name !="" || this.state.email !="" || this.state.password !="") 
      {
        console.log("You did not agree to the terms!");
        swal("Attention!", "You shouldn't left empty!", "error");
        /*
        const alert = alert.show('Some message', {
          timeout: 2000, // custom timeout just for this one alert
          type: 'success',
         
        });
        */
      }
      else {
        console.log("You did not agree to the terms!");
        swal("Attention!", "You did not agree to the terms!", "error");
      }
  }

  render() {
    return (
      <div className="formCenter" style={{ display: 'flex', justifyContent: 'center', padding: 70}}>
        <div>
          <h4 style={{ display: 'flex', justifyContent: 'center', padding: 20, color: "#83A092" }}>New user? Then Sign Up!</h4>
        <form onSubmit={this.handleSubmit} className="formFields" style={{backgroundImage:`url(${background})`, padding: 80}}>
          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
            <label className="formFieldLabel" htmlFor="name" style={{opacity: 1}}>
              Username:
            </label>
            <div style={{ margin: 10  }}> </div>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
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
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 5, margin: 10 }}>
            <button className="formFieldButton">Sign Up</button>{" "}
            <div style={{ margin: 5 }}> </div>
            <Link to="/Login" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default SignUpForm;