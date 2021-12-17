import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ListProducts from '../components/Products/Products5';

class Products5 extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>Pool side garden design</h2>
                    <ListProducts/>
                </div>
                
            </div>
            
        );
    }
}

export default Products5;