import React, { Component } from 'react'
import { Link } from "react-router-dom";
import background from '../assets/soft.jpg';
class Likes extends Component {
    constructor() {
        super();
        this.check = localStorage.getItem("isLoggedIn");
        this.user;
        if (this.check == "true") 
        {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
        this.goLogin = this.goLogin.bind(this);
      }
      goLogin()
      {
        this.props.history.push("/Login");
        window.location.reload();
      }
    render() {
        console.log(this.check);
        if (this.check == "true") {
            return(
                <div style={{ display: 'flex', justifyContent: 'center', padding: 200,  color: "#83A092", backgroundImage:`url(${background})` }}>
                   <div style={{  justifyContent: 'center', color: "#83A092" }}>
                   <h1>WELCOME {this.user.name}!</h1>
                      
                  </div>
                </div>
              )
            
        }
        else {
            return(
                <div style={{ display: 'flex', justifyContent: 'center', padding: 200,  color: "#83A092", backgroundImage:`url(${background})` }}>
                   <div style={{  justifyContent: 'center', color: "#83A092" }}>
                   <h1>You must login first!</h1>
                      <div style={{display: 'flex', justifyContent: 'center', margin: 30, padding: 30}}>
                      <button className="formFieldButton" type="submit" onClick={this.goLogin} >Login</button>
                      </div>
                  </div>
                </div>
              )
        }
    }
}
export default Likes;