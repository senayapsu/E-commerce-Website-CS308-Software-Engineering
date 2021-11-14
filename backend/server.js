import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import config from 'config';

//signin için eklendi
dotenv.config();

const app = express();

//this two lines is for all request that contains data , we are setting body, data will be translated to necesasry form vs.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mongodb databasee bağlanmak için
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/cs308_team',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
});

//localhost:5000 yapınca server is ready yazması için
app.get('/', (req, res) => {
    res.send('Server is ready');
});

//usersların userrouter ile bağlantısı için
app.use('/api/users', userRouter);

//products productrouter bağlantısı
app.use('/api/products', productRouter);

//takes product id and chekcs
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  
app.get('/api/products', (req, res) => {
    res.send(data.products);
  });



//hata verirse gelecek yazı için 
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

//yayınlanacak portu ayarlamak için
const port =  5000;
app.listen(port, () => {
    console.log('Serve at http://localhost:${port}');
});