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
        cz: 1259,
        en: 49,
        usd: 53,
      },
    },
    {
      __typename: 'Product',
      id: '002',
      title: 'Interview Editing Pack PRO',
      price: {
        __typename: 'Price',
        cz: 390,
        en: 15,
        usd: 16,
      },
    },
    /* {
      __typename: 'Product',
      id: '002',
      title: 'Title Presets',
      price: {
        __typename: 'Price',
        cz: 180,
        en: 7,
        usd: 8,
      },
    }, */
    {
      __typename: 'Product',
      id: '003',
      title: 'Sound Like Pro',
      price: {
        __typename: 'Price',
        cz: 180,
        en: 7,
        usd: 8,
      },
    },
  ],
};
