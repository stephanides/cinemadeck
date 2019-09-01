/* eslint-disable no-underscore-dangle */
import { getModalQuery, getProductsFromCart } from '../query';

export default {
  Mutation: {
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

      window.localStorage.setItem('cart', JSON.stringify(cartData));

      return data;
    },
    initCart: (_root, { cart }, { cache }) => {
      const data = { cart };

      cache.writeData({ data });

      return cart;
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

      if (cartData.length > 0) {
        window.localStorage.setItem('cart', JSON.stringify(cartData));
      } else {
        window.localStorage.clear();
      }

      return data;
    },
    toggleLang: (_root, { lang }, { cache }) => {
      const data = { lang };

      cache.writeData({ data });
      return lang;
    },
    toggleModal: (_root, {
      modal: { content, error, visible },
    }, { cache }) => {
      const { modal } = cache.readQuery({ query: getModalQuery });

      const data = {
        modal: {
          __typename: 'ModalProps',
          content: content !== undefined ? content : modal.content,
          error: error !== undefined ? error : modal.error,
          visible: visible !== undefined ? visible : modal.visible,
        },
      };

      cache.writeData({ data });
      return null;
    },
  },
};
