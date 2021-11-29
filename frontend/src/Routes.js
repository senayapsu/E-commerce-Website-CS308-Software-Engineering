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
import PaymentPage from "./PaymentPage/PaymentPage";
import Like from "./LikePage/Likes";
import Products1 from "./Product/Products1";
import Products2 from "./Product/Products2";
import Products3 from "./Product/Products3.js";
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
                    <Route path="/LikePage" component={Like} />
                    <Route path="/Products1" component={Products1} />
                    <Route path="/Products2" component={Products2} />
                    <Route path="/Products3" component={Products3} />
                    <Route path="/Payment" component={PaymentPage} />
                </Switch>
            </Router>
        )
    }
}
