/* eslint-disable no-async-promise-executor */
const bcrypt = require('bcryptjs');
const User = require('../db/models/User');

const {
  superAdmin: {
    superAdminEmail,
    superAdminFirstName,
    superAdminLastName,
    superAdminPassword,
  },
} = require('../config');

const setup = () => new Promise(async (resolve, reject) => {
  try {
    const superAdminExist = await User.findOne({ email: superAdminEmail });

    if (!superAdminExist) {
      const superAdminData = {
        approved: true,
        firstName: superAdminFirstName,
        email: superAdminEmail,
        lastName: superAdminLastName,
        password: await bcrypt.hash(superAdminPassword, 10),
        role: 0,
      };

      await User.create(superAdminData);
    }

    resolve();
  } catch (err) {
    reject(err);
  }
});

module.exports = setup;
