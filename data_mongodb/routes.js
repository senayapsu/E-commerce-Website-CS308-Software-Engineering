const express = require("express");
const userModel = require("./models");
const ProductModel = require("./product.js");
const Product = require("./product.js");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/add_product", async (request, response) => {
  const user = new ProductModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});


app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/Products", async (request, response) => {
    const users = await ProductModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_product_to_cart", async (request, response) => {
  
    users=await userModel.findOneAndUpdate({username:"mystring123",},{
      $addToSet:{
        cartlist: new ProductModel(request.body)}
    }
      );
    try {
      await users.save()
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/cart", async (request, response) => {
    const users = await userModel.findOne({username: "mystring123"});
  
    try {
      response.send(users.cartlist);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  //localhost:3003/search?category=All
  //search for products
  app.get('/search', async(req,res) => {
    const query={};
    if(req.query.search){
      query.name= {
        $regex: req.query.search,
        $options: 'i'
      }
      //assign category
      if(req.query.category && req.query.category != 'All'){
        query.category=req.query.category;
      }
    }
  
    try{
      let products=await Product.find(query);
      res.json(products)
    }catch(error){
      console.log(error);
      res.status(500).send('Error to get products');
    }
  });

  module.exports = app;