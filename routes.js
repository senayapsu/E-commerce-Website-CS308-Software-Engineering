const express = require("express");
const userModel = require("./models");
const ProductModel = require("./product.js");
const Product = require("./product.js");
const app = express();
const DesignModel= require ("./design_ideas");
//import axios from "axios";
    

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
    products= await ProductModel.findOne({name:request.body.name})
    users=await userModel.findOneAndUpdate({username:"mystring123",},{
      $addToSet:{
        cartlist: new ProductModel(products)}
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
    const users = await userModel.findOne({email:request.body.email});
  
    try {
      response.send(users.cartlist);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/design_ideas", async (request, response) => {
    const users = await DesignModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_design_idea", async (request, response) => {
    const user = new DesignModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/add_liked_product", async (request, response) => {
  products= await ProductModel.findOne({name:request.body.name})
  users=await userModel.findOneAndUpdate({email:request.body.email,},{
      //$push:{likes: {"product_id": request.body.productid} }
      $addToSet:{
        likes: new ProductModel(products)
      },
  });
  try {
    await users.save();
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/likes", async (request, response) => {
  const users = await userModel.findOne({email:request.body.email,});

  try {
    response.send(users.likes);
  } catch (error) {
    response.status(500).send(error);
  }
});
  module.exports = app;