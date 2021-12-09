import React, { useState, useEffect } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import useStyles from './styles';
var totalLikes = 0;
var isLiked = false;
/*
<Typography variant = 'h6'>
                        ${design.total_price_in_photo}
                    </Typography>
                    */
const isLikedFunc = () => {
  if(isLiked == false)
  {
    totalLikes = totalLikes + 1;
    isLiked = true;
  }
  else
  {
    totalLikes = totalLikes - 1;
    isLiked = false;
  }
}


const Design = ({design}) => {

    const classes = useStyles();
    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);
    
    
    useEffect(() => {
      isLikedFunc;
    }, [dummy])

    return (
        <Card className = {classes.root} >
            <CardMedia className = {classes.media} image = {design.image} title = {design.Title}/>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = 'h5' gutterBottom>
                        {design.Title}
                    </Typography>
                    
                    <Typography variant = 'h6' color = 'textSecondary'>
                        Category: {design.category}
                    </Typography>
                    <Typography variant = 'body2' color = 'textSecondary'>
                        Description: {design.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Like" onClick={() => {isLikedFunc(); setDummy(dummy+1);}}>
                    {isLiked == true ? <FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
                <Typography variant = 'body2' color = 'textSecondary'>
                        {totalLikes}
                    </Typography>

            </CardActions>
            
        </Card>
    )
}

export default Design