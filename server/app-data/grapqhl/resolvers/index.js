/* eslint-disable no-nested-ternary */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const uniqid = require('uniqid');
const { superSecret } = require('../../config');
// const uniqid = require('uniqid');
const { findLastOrderNum } = require('../../lib');

const Order = require('../../db/models/Order');
const User = require('../../db/models/User');

module.exports = {
  Query: {
    orders: async () => {
      try {
        const orders = await Order.find();

        return orders;
      } catch (err) {
        return err.message;
      }
    },
    order: async (root, { orderNum }) => {
      try {
        console.log(orderNum);
        const order = await Order.findOne({ orderNum });

        if (!order) {
          throw new Error('Order not found');
        }

        return order;
      } catch (err) {
        return err.message;
      }
    },
    user: async (root, { id }) => {
      try {
        const user = await User.findOne({ _id: mongoose.Types.ObjectId(id) });

        if (!user) {
          throw new Error('User not found');
        }

        return user;
      } catch (err) {
        return err.message;
      }
    },
    users: async () => {
      try {
        const data = await User.find({ role: { $gt: 0 } });

        return data;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    createOrder: async (root, {
      order: {
        address,
        currency,
        email,
        name,
        note,
        paymentMethod,
        products,
        totalPriceToPay,
      },
    }) => {
      try {
        const orderExist = await Order.findOne({
          email,
          dateCreated: new Date().toISOString(),
        });

        if (orderExist) {
          throw new Error('Allready Exist');
        }

        const lastOrderNum = await findLastOrderNum();

        const orderNum = lastOrderNum
          ? new Date().getFullYear() + (
            (lastOrderNum + 1) > 99
              ? `${lastOrderNum + 1}`
              : (
                (lastOrderNum + 1) > 9
                  ? `0${lastOrderNum + 1}`
                  : `00${lastOrderNum + 1}`
              )
          ) : `${new Date().getFullYear()}001`;
        const orderUid = uniqid('', `-${orderNum}`);

        await Order.create({
          address,
          currency,
          email,
          name,
          note,
          orderNum,
          orderUid,
          orderStatus: 'CREATED',
          paymentMethod,
          products,
          totalPriceToPay,
        });

        return {
          address,
          currency,
          email,
          name,
          note,
          orderNum,
          orderUid,
          orderStatus: 'CREATED',
          paymentMethod,
          products,
          totalPriceToPay,
        };
      } catch (err) {
        throw new Error(err.message);
      }
    },
    updateOrder: async (root, { orderUpdate: { orderNum, orderStatus } }) => {
      try {
        const orderToUpdate = await Order.findOne({ orderNum });

        if (!orderToUpdate) {
          throw new Error('Order not found');
        }

        const updatedOrder = await Order.findOneAndUpdate(
          { orderNum }, { $set: { orderStatus } }, { uppsert: true, new: true },
        );

        return updatedOrder;
      } catch (err) {
        throw new Error(err);
      }
    },
    loginUser: async (root, { user: { email, password } }) => {
      try {
        const userExist = await User.findOne({ email });

        if (!userExist) {
          throw new Error('User not exist');
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (passwordMatch) {
          const {
            _id, approved, firstName, lastName, role,
          } = userExist;

          const token = await jwt.sign(
            { _id },
            superSecret,
            { expiresIn: 31536000 },
          );

          return {
            _id,
            approved,
            firstName,
            lastName,
            jwt: token,
            role,
          };
        }

        throw new Error('Incorrect data');
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
