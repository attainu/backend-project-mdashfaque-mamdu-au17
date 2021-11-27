import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
<<<<<<< HEAD

import cors from 'cors'


=======
import cors from 'cors';
>>>>>>> a0a2202c0f7b5b2c5a44a5816e72e2909e26dbe6
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

<<<<<<< HEAD
app.use(cors())


=======
app.use(cors());
>>>>>>> a0a2202c0f7b5b2c5a44a5816e72e2909e26dbe6
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(DB_CONNECTION);
try {
  mongoose.connect(
    'mongodb+srv://md_ashfaque:MOg3j2jcKpnV1k2l@cluster0.czzou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log('Mongoose is connected')
  );
} catch (e) {
  console.log('could not connect');
}
<<<<<<< HEAD
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });
=======

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

>>>>>>> a0a2202c0f7b5b2c5a44a5816e72e2909e26dbe6
app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

<<<<<<< HEAD
=======
app.use('/api/orders', orderRouter);

>>>>>>> a0a2202c0f7b5b2c5a44a5816e72e2909e26dbe6
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
