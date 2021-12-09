import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ListProducts from '../components/Products/Products2';

class Products2 extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>GARDEN</h2>
                    <ListProducts/>
                </div>
                
            </div>
            
        );
    }
}

export default Products2;