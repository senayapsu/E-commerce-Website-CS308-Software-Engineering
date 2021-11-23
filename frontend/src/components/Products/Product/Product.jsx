import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; // it is an icon from '@material-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import useStyles from './styles';

const Product = ({product}) => {

    const classes = useStyles();

    return (
        <Card className = {classes.root} >
            <CardMedia className = {classes.media} image = {product.image} title = {product.name}/>
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
                <IconButton aria-label = "Add to Cart">
                    <AddShoppingCart/>
                    
                </IconButton>
                <IconButton aria-label = "Like">
                    <FavoriteBorderIcon/>
                </IconButton>
            </CardActions>
            
        </Card>
    )
}

export default Product
