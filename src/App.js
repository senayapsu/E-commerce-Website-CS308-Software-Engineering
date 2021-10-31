import React from 'react';
import { useState } from "react";
import { Navbar, Products} from './components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Screens
import AboutUsScreen from "./Screens/AboutUsScreen";
//import ProductScreen from "./screens/ProductScreen";
//import CartScreen from "./screens/CartScreen";
// between switch  <Route exact path="/" component={HomeScreen} />

function App() {
    const [sideToggle, setSideToggle] = useState(false);
    
    return (
        <Router>
            
            <div >
                
                <Navbar click={() => setSideToggle(true)} />
                <Products/>
                
                 <AboutUsScreen/>
            </div>
            
        </Router>
    )
}

export default App;
