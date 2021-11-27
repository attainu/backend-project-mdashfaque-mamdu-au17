import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

// using cors
app.use(cors());
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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
