const express = require("express");
const userModel = require("./models");
const ProductModel = require("./product.js");
const DesignModel= require ("./design_ideas");
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
    products= await ProductModel.findOne({name:request.body.name})
    users=await userModel.findOneAndUpdate({email:request.body.email,},{
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

  app.post("/cart", async (request, response) => {
    const users = await userModel.findOne({email:request.body.email});
  
    try {
      response.send(users.cartlist);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  app.get('/search', async(req,res) => {
    const query={};
    if(req.query.search){
      query.name= {
        $regex: req.query.search,
        $options: 'i'
      }
    }
      //assign category
      if(req.query.category && req.query.category != 'All'){
        query.category=req.query.category;
      }
  
    try{
      let products=await ProductModel.find(query);
      console.log(products);
      res.send(products);
      
    }catch(error){
      console.log(error);
      res.status(500).send('Error to get products');
    }
  });
  
  //http://localhost:3003/get_single_product?product_id=... 
  app.get('/get_single_product', async(req,res) => {
    const query={};
    if(req.query.product_id){
      query.name= {
        $regex: req.query.product_id,
        $options: 'i'
      }
    }
    
  
    try{
      product= await ProductModel.find(query);
      console.log(product);
      res.send(product);
      
    }catch(error){
      console.log(error);
      res.status(500).send('Error to get single product');
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
app.post("/add_1_like_design", async (request, response) => {
  users=await DesignModel.findOneAndUpdate({Title:request.body.Title,},{
      //$push:{likes: {"product_id": request.body.productid} }
      $inc:
      {
        like_number: 1
      },
  });
  try {
    await users.save();
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/dec_1_like_design", async (request, response) => {
  users=await DesignModel.findOneAndUpdate({Title:request.body.Title,},{
      //$push:{likes: {"product_id": request.body.productid} }
      $inc:
      {
        like_number: -1
      },
  });
  try {
    await users.save();
    response.send(users);
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


app.post("/likes", async (request, response) => {
  const users = await userModel.findOne({email:request.body.email,});
  
  try {
    response.send(users.likes);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/change_password", async (request, response) => {
  users=await userModel.findOneAndUpdate({email:request.body.email,},{
      //$push:{likes: {"product_id": request.body.productid} }
      $set:{
        password: request.body.password
      },
  });
  try {
    await users.save();
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
