import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

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
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter" style={{ display: 'flex', justifyContent: 'center', padding: 100 }}>
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 20 }}>
            <label className="formFieldLabel" htmlFor="name">
              Full Name:
            </label>
            <div style={{ margin: 10 }}> </div>
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
    );
  }
}
export default SignUpForm;