/* eslint-disable no-underscore-dangle */
import { getProductsFromCart } from '../query';

export default {
  Mutation: {
    toggleLang: (_root, { lang }, { cache }) => {
      const data = { lang };

      cache.writeData({ data });
      return lang;
    },
    addProductToCart: (_root, { product }, { cache }) => {
      const dough = { ...product, __typename: 'ProductInCart' };
      const { cart } = cache.readQuery({ query: getProductsFromCart });
      const immutableCartCopy = [...cart, dough];
      const data = {
        cart: immutableCartCopy,
        __typename: 'CartType',
      };

      cache.writeData({ data });

      return data;
    },
  },
};
