import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import {ShoppingCart} from '@material-ui/icons';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
//import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo2.jpeg';
import useStyles from './styles';

const Navbar = () => {

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">

        <Toolbar>

          <Typography variant="h4" className={classes.title} color="inherit">
            <img src={logo} alt="LAPSS" height="60px" className={classes.image} /> LAPSS
          </Typography>

          <div className={classes.grow} />

          <div className={classes.button}>
            <NavLink to = '/' >
            <Typography variant="h6" className={classes.text} color="white">Home</Typography>
            </NavLink>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <NavLink to = '/' >
            <Typography variant="h6" className={classes.text} color="white">Search</Typography>
            </NavLink>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <NavLink to = '/' >
            <Typography variant="h6" className={classes.text} color="white">Design Ideas</Typography>
            </NavLink>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <NavLink to = '/' >
            <Typography variant="h6" className={classes.text} color="white">All Products</Typography>
            </NavLink>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <NavLink to = '/' >
            <Typography variant="h6" className={classes.text} color="white">About us</Typography>
            </NavLink>
          </div>

          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton  aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart  style={{ color: "white" }}/>
              </Badge>
            </IconButton>
          </div>

          <div className={classes.growth} />

          <div className={classes.button}>
            <IconButton  aria-label="Show cart items" color="inherit">
                <FavoriteIcon  style={{ color: "white" }}/>
            </IconButton>
          </div>

          <div className={classes.growth} />

          <div className={classes.button}> 
            <IconButton  aria-label="Show cart items" style={{ fontSize: '5', color: "white" }}> Log in
                <PersonIcon  style={{ color: "white" }}/>
                
            </IconButton>
            
          </div>

        </Toolbar>
      </AppBar>
 
    </>
  );
};

export default Navbar;
