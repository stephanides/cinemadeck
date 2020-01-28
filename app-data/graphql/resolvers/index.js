/* eslint-disable no-underscore-dangle */
import { getModalQuery, getProductsFromCart, getProducts } from '../query';

export default {
  Mutation: {
    addProductToCart: (_root, { id }, { cache }) => {
      const { products } = cache.readQuery({ query: getProducts });
      let { cart = [] } = cache.readQuery({ query: getProductsFromCart });
      const product = products.find((item) => (item.id === id));
      const dough = {
        ...product, count: 1, totalPrice: product.price, __typename: 'ProductInCart',
      };

      if (!cart) {
        cart = [];
      }
      let cartData;

      if (cart && cart.length > 0) {
        let i = 0;
        let productExist = false;

        while (i < cart.length) {
          if (cart[i].id === id) {
            productExist = true;
            dough.count = cart[i].count + 1;
            dough.totalPrice = {
              ...dough.totalPrice,
              cz: dough.price.cz * dough.count,
              en: dough.price.en * dough.count,
            };

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
    replaceCartWithData: (_root, { data: cartDataDough }, { cache }) => {
      const { products: productsDefs } = cache.readQuery({ query: getProducts });
      const cartData = [];

      for (let i = 0; i < productsDefs.length; i += 1) {
        const item = {
          ...productsDefs[i],
          count: 1,
          price: {
            ...productsDefs[i].price,
            cz: Math.round(productsDefs[i].price.cz - (productsDefs[i].price.cz * 0.24)), // 0.16, 0.15
            en: Math.round(productsDefs[i].price.en - (productsDefs[i].price.en * 0.24)),
          },
          totalPrice: {
            ...productsDefs[i].price,
            cz: Math.round(productsDefs[i].price.cz - (productsDefs[i].price.cz * 0.24)),
            en: Math.round(productsDefs[i].price.en - (productsDefs[i].price.en * 0.24)),
          },
        };

        cartData.push(item);
      }

      const data = {
        cart: cartData,
        __typename: 'CartType',
      };

      cache.writeData({ data });

      window.localStorage.setItem('cart', JSON.stringify(cartData));
    },
    removeProductFromCart: (_root, { id }, { cache }) => {
      const { cart } = cache.readQuery({ query: getProductsFromCart });
      let i = 0;
      let cartData;

      while (i < cart.length) {
        if (cart[i].id === id) {
          if (cart[i].count > 1) {
            cartData = Object.assign(
              [...cart],
              {
                [i]: {
                  ...cart[i],
                  count: cart[i].count - 1,
                  totalPrice: {
                    ...cart[i].totalPrice,
                    cz: ((cart[i].count - 1) * cart[i].price.cz),
                    en: ((cart[i].count - 1) * cart[i].price.en),
                  },
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
