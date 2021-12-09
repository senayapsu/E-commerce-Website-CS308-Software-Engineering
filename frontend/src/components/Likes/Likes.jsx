import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import Product from './Like/Like';
import useStyles from './styles';
import axios from "axios";

var user = JSON.parse(localStorage.getItem("user"));

const getProducts = async () => {
    const res = await axios.post("http://localhost:3003/likes", 
    {
        "email": user.email,
    })
    console.log(res.data);
    return res.data;
};


const Likes = (props) => // Produtcs var. is a fuction which does not take a parameter
{
    const [apiResponse, setApiResponse] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
      getProducts().then(
        (res) => setApiResponse(res));
    }, [])

    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justifyContent="center" spacing={4}>
            {apiResponse.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </main>
      );
}

export default Likes;