import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles';
import axios from "axios";

var user = JSON.parse(localStorage.getItem("user"));
const getProducts = async () => {

    const res = await axios.get("https://lapss-cs308.herokuapp.com/designsearch?designcategory=design1");
    console.log(res.data);
    return res.data;

};


const Products4 = (props) => // Produtcs var. is a fuction which does not take a parameter
{
    const [apiResponse, setApiResponse] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
      axios
        .get('https://lapss-cs308.herokuapp.com/users')
          .then(response => {
            var loggedUser;
            if (response.status == 200 && user) {
              var isSuccess = false;
              response.data.forEach(user2 => {
                if ((user2.email == user.email)) {
                  isSuccess = true;
                  user = user2;
                  loggedUser = JSON.stringify(user2);
                  console.log("Updated user!");
                }
              });
              localStorage.setItem("user", loggedUser);
            }
          }).then(() => {
            getProducts().then(
              (res) => {
                if (user) {
                res.forEach((item) => {
                  user.likes.forEach((liked) => {
                    if (item.name == liked.name) {
                      item.isLiked = true;
                    }
                  })
                });
              }
                console.log("Got products!");
                setApiResponse(res);
            });
          })
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

export default Products4;