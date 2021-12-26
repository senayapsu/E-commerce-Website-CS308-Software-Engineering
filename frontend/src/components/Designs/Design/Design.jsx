import React, { useState, useEffect } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button} from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import useStyles from './styles';
import axios from "axios";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue } from '@material-ui/core/colors';
var user = JSON.parse(localStorage.getItem("user"));
var title = "";
var bilmemne = false;




const like = async (what) => {
    
    console.log(user);
    if (user == null) {
        swal("Error!", "You must login first!", "error");
        console.log("you are not logged in");
        return;
    }
    swal("<3", "You liked the item!", "success");
    var isLiked = true;
    var res = await axios.post('https://lapss-cs308.herokuapp.com/add_1_like_design', {
        "Title": title,
    })
    console.log(res);
    return res.data;
    
  };

  const dislike = async (what) => {
    
    console.log(user);
    if (user == null) {
        swal("Error!", "You must login first!", "error");
        console.log("you are not logged in");
        return;
    }
    swal("</3", "You disliked the item!", "success");
    var isLiked = true;
    var res = await axios.post('https://lapss-cs308.herokuapp.com/dec_1_like_design', {
        "Title": title,
    })
    console.log(res);
    return res.data;
    
  };
  var goLink = (what) =>
  {
      if(what == "design1")
      {
        return '/Products4';
      }
      else if(what == "design2")
      {
        return "/Products5";
      }
      else
      {
        return "/Products6";
      }

  };

const Design = ({design}) => {

    const classes = useStyles();
    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);
    const [dummy2, setDummy2] = useState(1);
    
    useEffect(() => {
        if (bilmemne)
          like(title);
      }, [dummy])

      useEffect(() => {
        if (bilmemne)
          dislike(title);
      }, [dummy2])

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
                <div>
                <form action={goLink(design.designcategory)} method="get">
                    <Button variant="contained" type='submit'>
                        See the products of this design
                    </Button>
                </form>
                </div>
                    
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Like" onClick={() => {bilmemne=true; title = design.Title; setDummy(dummy+1); design.like_number+=1}}>
                    <ArrowUpwardIcon/>
                </IconButton>
                <Typography variant = 'body2' color = 'textSecondary'>
                    {design.like_number}
                </Typography>
                <IconButton aria-label = "Dislike" onClick={() => {bilmemne=true; title = design.Title; setDummy2(dummy2+1); design.like_number-=1}}>
                    <ArrowDownwardIcon/>
                </IconButton>
                

            </CardActions> 
            
        </Card>
    )
}

export default Design