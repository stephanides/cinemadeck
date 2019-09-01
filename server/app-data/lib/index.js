/* eslint-disable no-async-promise-executor */
/* eslint-disable no-nested-ternary */
const Order = require('../db/models/Order');

const findLastOrderNum = () => (
  new Promise(
    async (resolve, reject) => {
      try {
        const orders = await Order.find({});

        if (orders.length > 0) {
          const numbers = [];

          for (let i = 0; i < orders.length; i += 1) {
            let tempNum2Dig = 0;
            let tempNum3Dig = 0;
            const numStringToParse = `${orders[i].orderNum}`;

            if (parseInt(numStringToParse[4], 10) > 0) {
              tempNum3Dig = parseInt(numStringToParse[4], 10);
            }
            if (parseInt(numStringToParse[5], 10) > 0) {
              tempNum2Dig = parseInt(numStringToParse[5], 10);
            }

            const num = tempNum3Dig
              ? parseInt(
                `${tempNum3Dig}${numStringToParse.charAt(5)}${numStringToParse.charAt(6)}`, 10,
              )
              : (
                tempNum2Dig
                  ? parseInt(`${tempNum2Dig}${numStringToParse.charAt(6)}`, 10)
                  : parseInt(numStringToParse.charAt(6), 10)
              );

            numbers.push(num);
          }

          const orderNum = Math.max(null, ...numbers);

          resolve(orderNum);
        } else {
          resolve(0);
        }
      } catch (err) {
        reject(err);
      }
    },
  )
);

module.exports = {
  findLastOrderNum,
};
