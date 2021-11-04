import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Login from "./Login/SignInForm";
import SignUp from "./Login/SignUpForm";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import SignUpForm from "./Login/SignUpForm";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUpForm} />
                </Switch>
            </Router>
        )
    }
}
