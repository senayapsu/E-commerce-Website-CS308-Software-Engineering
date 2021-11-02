import React from 'react';
//import { useState } from "react";
import { Navbar, Products} from '../components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import useStyles from './styles';

const AboutUsScreen = () => {
    
    const classes = useStyles();
    return (
        
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" className={classes.title} color="inherit">
             
            About Us 
        </Typography>
        <div/>
          
      </main>
            
        
    )
}

export default AboutUsScreen;