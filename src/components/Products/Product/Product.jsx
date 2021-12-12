import React, { useState, useEffect } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; // it is an icon from '@material-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import useStyles from './styles';
import swal from "sweetalert";


var user = JSON.parse(localStorage.getItem("user"));
var product_name = "";
var bilmemne = false;
var isLiked = false;

const isLikedFunc = () => {
    if(isLiked == false)
    {
      isLiked = true;
    }
    else
    {
      isLiked = false;
    }
  }
const addLikes = async (what) => {
    
    console.log(user);
    if (user == null) {
        swal("Error!", "You must login first!", "error");
        console.log("you are not logged in");
        return;
    }
    swal(":)", "Success!", "success");
    var isLiked = true;
    var res = await axios.post('http://localhost:3003/everything_for_like', {
        "name": what,
        "email": user.email,
    })
    console.log(res);
    return res.data;
    
  };
  const addCart = async (what) => {
   
    console.log(user);
    if (user == null) {
        swal("Error!", "You must login first!", "error");
        console.log("you are not logged in");
        return;
    }
    swal("+1", "The item is added to your cart!", "success");
    var res = await axios.post('http://localhost:3003/add_product_to_cart', {
        "name": what,
        "email": user.email,
    })
    console.log(res);
    return res.data;
  };

const Product = ({product}) => {

    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);
    const classes = useStyles();
    const [dummy2, setDummy2] = useState(1);
    const productId=product._id;
    
    useEffect(() => {
      if (bilmemne){
        addLikes(product_name);
      }
    }, [dummy])

    useEffect(() => {
        if (bilmemne)
          addCart(product_name);
      }, [dummy2])

    return (
        <Card className = {classes.root} >
            <a href={'/'+ productId}><CardMedia className = {classes.media} image = {product.image} title = {product.name}/></a>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = 'h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant = 'h6'>
                        ${product.price}
                    </Typography>
                    <Typography variant = 'body2' color = 'textSecondary'>
                        {product.category}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Add to Cart" onClick={() => {bilmemne=true; product_name=product.name; setDummy2(dummy2+1)}}>
                    <AddShoppingCart/>
                    
                </IconButton>
                <IconButton aria-label = "Like" onClick={() => {bilmemne=true; isLikedFunc(); product_name=product.name; setDummy(dummy+1)}}>
                     {isLiked == true ? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </CardActions>
            
        </Card>
    )
}

export default Product
