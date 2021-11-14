import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

//API for sending list of products to frontend
//http://localhost:5000/api/products/
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

//adding products to the product database((sanırım, data dosyasındaki products listesini ekliyor))
//http://localhost:5000/api/products/seed
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

//details product API
//access to product with its id in the request
//example below
//http://localhost:5000/api/products/6190180769454784222e0bdf
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;