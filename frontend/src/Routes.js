import React, { Component } from "react";
import { Router, Switch , Route } from "react-router-dom";

import About from "./About/About";
import Login from "./Login/SignInForm";
import Search from "./Search/Search";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import SignUpForm from "./Login/SignUpForm";
import Cart from "./CartPage/CartPage";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Search" component={Search} />
                    <Route path="/Products" component={Products} />
                    <Route path="/Login" component={Login} />
                    <Route path="/SignUp" component={SignUpForm} />
                    <Route path="/CartPage" component={Cart} />
                </Switch>
            </Router>
        )
    }
}
