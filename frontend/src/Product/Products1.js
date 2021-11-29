import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ListProducts from '../components/Products/Products1';

class Products1 extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>FLOWERS</h2>
                    <ListProducts/>
                </div>
                
            </div>
            
        );
    }
}

export default Products1;