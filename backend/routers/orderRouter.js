import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';
const orderRouter = express.Router();

// /api/orders
// By using isAuth req.user will be filled with user  information
orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        deliveryAddress: req.body.deliveryAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        deliveryCharge: req.body.deliveryCharge,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });

      // save the order details in db and pass order to frontend
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);

export default orderRouter;
