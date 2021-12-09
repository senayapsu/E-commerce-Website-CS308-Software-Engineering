import React, { Component } from "react";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";
import GoogleLoginComponent from "../googlebuttoncomponent";
import axios from "axios";
import background from '../assets/soft.jpg';
import swal from "sweetalert";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signOut = this.signOut.bind(this);
    this.goSignUpPage = this.goSignUpPage.bind(this);
    this.check = localStorage.getItem("isLoggedIn");

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
      .get('http://localhost:3003/users')
        .then(response => {
          console.log("in response");
          console.log(response);
          var loggedUser;
          if (response.status == 200) {
            var isSuccess = false;
            response.data.forEach(user => {
              if ((user.email == this.state.email) && (user.password == this.state.password)) {
                isSuccess = true;
                loggedUser = JSON.stringify(user);
                console.log(loggedUser);
              }
            });
            if (!isSuccess) {
              console.log("Nope!");
              swal("Error!", "Wrong password or Email!", "error");
            }
            else
            {
              console.log("Yeeeeey successful login!!!!!");
              localStorage.setItem("user", loggedUser);
              localStorage.setItem("isLoggedIn", true); // user is logged in
              this.props.history.push("/");
              swal("Yeeey!", "You are logged in!!!!", "success")
                .then(() => {
                  window.location.reload();
                });
            }
          }
        }
        )
        .catch(function (error) {
          console.log("in error");
          console.log(error.response.data);
        });
  }

  signOut()
  {
    localStorage.clear();
    localStorage.setItem("isLoggedIn", false);
    this.props.history.push("/");
    swal("Log Out!", "You are logged out!!!!", "success")
      .then(() => {
      window.location.reload();
    });

  }
  goSignUpPage()
  {
    this.props.history.push("/SignUp");
    window.location.reload();
  }
 
  render() {
    console.log(this.check);
  if (this.check == "true") 
  {
      return(
        <div style={{ display: 'flex', justifyContent: 'center', padding: 200,  color: "#83A092", backgroundImage:`url(${background})` }}>
           <div style={{  justifyContent: 'center', color: "#83A092" }}>
              <h1>You have already logged in!</h1>
              <div style={{display: 'flex', justifyContent: 'center', margin: 30, padding: 30}}>
              <button className="formFieldButton" type="submit" onClick={this.signOut} >Sign Out</button>
              </div>
          </div>
        </div>
      )
  }
  else
  {
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
            <Link to="/SignUp" className="formFieldLink" onClick = {this.goSignUpPage}>
              Create an account
            </Link>

            <div style={{display: 'flex', alignItems: "left", justifyContent: 'left', padding: 20 }}>
            <Link to="/FYP" className="formFieldLink" onClick = {this.goSignUpPage}>
              Forget your password?
            </Link>
              
            </div>
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
}
export default SignInForm;