import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ListProducts from '../components/Products/Products4';

class Products4 extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>Platform design</h2>
                    <ListProducts/>
                </div>
                
            </div>
            
        );
    }
}

export default Products4;