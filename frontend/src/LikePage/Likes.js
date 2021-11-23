import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Likes extends Component {
    constructor() {
        super();
        this.check = localStorage.getItem("isLoggedIn");
        this.user;
        if (this.check == "true") {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
      }
    render() {
        console.log(this.check);
        if (this.check == "true") {
            return (
                <div>
                    <h1>{this.user.name} WELCOME!</h1>
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>You must login first!</h1>
                </div>
            )
        }
    }
}
export default Likes;