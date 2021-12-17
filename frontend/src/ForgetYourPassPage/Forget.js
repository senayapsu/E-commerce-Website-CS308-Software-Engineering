import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from '../assets/soft.jpg';
import swal from "sweetalert";

class Forget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
    if(this.state.email !="") {
      
    axios
      .post('http://localhost:3003/change_password',
        {
          "email": this.state.email,
        })
        .then(response => {
          console.log("in response");
          swal("Succesfull", "An email has already send!", "success").then(() => {
            console.log(response);
            this.props.history.push("/Login");
            window.location.reload();
          });
          
          
        }
        )
        .catch(function (error) {
          console.log("in error");
          console.log(error.response.data);
        });
      }
      else if (this.state.email =="") 
      {
        console.log("You did not agree to the terms!");
        swal("Attention!", "You shouldn't left empty your email!", "error");
      }
      else {
        swal("Attention!", "Something is going wrong please check your email!", "error");
      }
  }

  render() {
    return (
      <div className="formCenter" style={{ display: 'flex', justifyContent: 'center', padding: 70}}>
        <div>
          <h4 style={{ display: 'flex', justifyContent: 'center', padding: 20, color: "#83A092" }}>Forget? Then Write Your Email!</h4>
        <form onSubmit={this.handleSubmit} className="formFields" style={{backgroundImage:`url(${background})`, padding: 80}}>
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
          <div className="formField" style={{ display: 'flex', justifyContent: 'left', padding: 5, margin: 10 }}>
            <button className="formFieldButton">Send me an email!</button>{" "}
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default Forget;