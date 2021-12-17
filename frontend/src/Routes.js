import React, { Component } from "react";
import { Router, Switch , Route } from "react-router-dom";

import About from "./About/About";
import Login from "./Login/SignInForm";
import Search from "./Search/Search";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import SignUpForm from "./Login/SignUpForm";
import Cart from "./CartPage/CartPageReal";
import PaymentPage from "./PaymentPage/PaymentPage";
import Like from "./LikePage/Likes";
import Forget from "./ForgetYourPassPage/Forget";
import DesignIdeas from "./DesignIdeas/DesignIdeasPage";
import Products1 from "./Product/Products1";
import Products2 from "./Product/Products2";
import Products3 from "./Product/Products3.js";
import Products4 from "./Product/Products4.js";
import Products5 from "./Product/Products5.js";
import Products6 from "./Product/Products6.js";
import ProductDetailPage from "./Product/ProductDetail.js";
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
                    <Route path="/Forget" component={Forget} />
                    <Route path="/Products1" component={Products1} />
                    <Route path="/Products2" component={Products2} />
                    <Route path="/Products3" component={Products3} />
                    <Route path="/Products4" component={Products4} />
                    <Route path="/Products5" component={Products5} />
                    <Route path="/Products6" component={Products6} />
                    <Route path="/Payment" component={PaymentPage} />
                    <Route path="/DesignIdeas" component={DesignIdeas} />
                    <Route path="/:productId" component={ProductDetailPage} />
                </Switch>
            </Router>
        )
    }
}
