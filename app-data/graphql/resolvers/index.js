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
      const dough = { ...product, totalPrice: product.price, __typename: 'ProductInCart' };
      const { cart } = cache.readQuery({ query: getProductsFromCart });
      let cartData;

      if (cart.length > 0) {
        let i = 0;
        let productExist = false;

        while (i < cart.length) {
          if (cart[i].title === product.title) {
            productExist = true;
            dough.count = cart[i].count + 1;
            dough.totalPrice *= dough.count;
            cartData = Object.assign([...cart], { [i]: dough });
            break;
          }

          i += 1;
        }

        if (!productExist) {
          cartData = [...cart, dough];
        }
      } else {
        cartData = [...cart, dough];
      }

      const data = {
        cart: cartData,
        __typename: 'CartType',
      };

      cache.writeData({ data });

      return data;
    },
    removeProductFromCart: (_root, { title }, { cache }) => {
      const { cart } = cache.readQuery({ query: getProductsFromCart });
      let i = 0;
      let cartData;

      while (i < cart.length) {
        if (cart[i].title === title) {
          if (cart[i].count > 1) {
            cartData = Object.assign(
              [...cart],
              {
                [i]: {
                  count: cart[i].count - 1,
                  price: cart[i].price,
                  title,
                  totalPrice: ((cart[i].count - 1) * cart[i].price),
                  __typename: 'ProductInCart',
                },
              },
            );
          } else {
            cartData = [...cart.slice(0, i), ...cart.slice(i + 1)];
          }
          break;
        }

        i += 1;
      }

      const data = {
        cart: cartData,
        __typename: 'CartType',
      };

      cache.writeData({ data });

      return data;
    },
  },
};
