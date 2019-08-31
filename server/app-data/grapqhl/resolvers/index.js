const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { superSecret } = require('../../config');
// const uniqid = require('uniqid');

const User = require('../../db/models/User');

module.exports = {
  Query: {
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
