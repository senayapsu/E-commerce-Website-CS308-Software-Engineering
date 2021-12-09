import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Design from '../components/Designs/Design/Design';
import ListDesigns from '../components/Designs/Designs';

class DesignIdeas extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', padding: 100 }}>
                <div>
                    <h2 style={{color: "black"}}>Some Design Ideas</h2>
                    <ListDesigns/>
                </div>
                
            </div>
            
        );
    }
}

export default DesignIdeas;