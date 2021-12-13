import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles';
import axios from "axios";
/*
const products = [
    {id: 1, name: "rose", description: "Category = flowers", price: '15 TL', image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/12/92946.jpg'},
    {id: 2, name: "daisy", description: "Category = flowers", price: '5 TL', image: 'https://cdn.britannica.com/w:400,h:300,c:crop/36/82536-050-7E968918/Shasta-daisies.jpg'},
    {id: 3, name: "sofa", description: "Category = Furniture-seating", price: '3500 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    {id: 4, name: "chair", description: "Category = Furniture-seating", price: '900 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    {id: 5, name: "chair", description: "Category = Furniture-seating", price: '900 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    {id: 6, name: "chair", description: "Category = Furniture-seating", price: '900 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    {id: 7, name: "chair", description: "Category = Furniture-seating", price: '900 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    {id: 8, name: "chair", description: "Category = Furniture-seating", price: '900 TL', image: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sw=2000'},
    
];

var products = [];
axios.get("http://localhost:3003/products")
.then((res) => {
  console.log(res);
  products = res.data;
  console.log(products);
}).catch(function (error) {
  console.log("in error");
  console.log(error.response.data);
});
*/
//var products = [];
var user = JSON.parse(localStorage.getItem("user"));
const getProducts = async () => {

    const res = await axios.get("http://localhost:3003/products");
    console.log(res.data);
    return res.data;

};


const Products = (props) => // Produtcs var. is a fuction which does not take a parameter
{
    const [apiResponse, setApiResponse] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
      axios
        .get('http://localhost:3003/users')
          .then(response => {
            var loggedUser;
            if (response.status == 200) {
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
                res.forEach((item) => {
                  user.likes.forEach((liked) => {
                    if (item.name == liked.name) {
                      item.isLiked = true;
                    }
                  })
                });
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

export default Products;