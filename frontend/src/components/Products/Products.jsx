import React from "react";
import {Grid} from "@material-ui/core";
import Product from './Product/Product';
import useStyles from './styles';

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
const Products = () => // Produtcs var. is a fuction which does not take a parameter
{
    const classes = useStyles();

    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </main>
      );
}

export default Products;