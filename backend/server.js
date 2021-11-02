import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import config from 'config';

dotenv.config();
//const mongodburl = config.mongodburl;

const app = express();
//this two lines is for all request that contains data , we are setting body, data will be translated to necesasry form vs.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/amazona',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Serve at http://localhost:${port}');
});