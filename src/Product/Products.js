import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ListProducts from '../components/Products/Products';

class Products extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>Our Products</h2>
                    <ListProducts/>
                </div>
                
            </div>
            
        );
    }
}

export default Products;