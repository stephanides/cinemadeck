export default {
  lang: 'cz',
  cart: [],
  modal: {
    __typename: 'ModalProps',
    content: 'CONTENT',
    error: false,
    visible: false,
  },
  products: [
    {
      __typename: 'Product',
      id: '001',
      title: 'CinemaDeck Cards',
      price: {
        __typename: 'Price',
        cz: 947,
        en: 37,
      },
    },
    {
      __typename: 'Product',
      id: '002',
      title: 'Light Like Pro',
      price: {
        __typename: 'Price',
        cz: 180,
        en: 7,
      },
    },
    {
      __typename: 'Product',
      id: '003',
      title: 'Sound Like Pro',
      price: {
        __typename: 'Price',
        cz: 180,
        en: 7,
      },
    },
  ],
};
