/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'react-apollo';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { addProductToCartMutation } from '../../../../graphql/mutation';

import styles from './styles/product.style';
import locale from '../../../../shared/localisation/eshop';

const Product = graphql(
  addProductToCartMutation,
)(({ mutate, lang, productData }) => {
  const {
    content, id, imageURL, price, titleOne, titleTwo, knowMoreUrl, knowMoreUrlAs,
  } = productData;

  const handleAddProductToCart = async (_id) => {
    try {
      await mutate({ variables: { id: _id } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product">
      <div className="product-bg">
        <LazyLoad height={250}>
          <img
            src={imageURL}
            alt=""
          />
        </LazyLoad>
        <h4 className="text-uppercase d-flex justify-content-between">
          <span
            dangerouslySetInnerHTML={{ __html: titleOne }}
          />
          <span className="font-weight-bold">
            {
              lang === 'cz'
                ? (
                  <div>
                    <span className="position-relative">
                      {price[0]}
                      <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                        czk
                      </small>
                    </span>
                    &nbsp;/&nbsp;
                    <span className="position-relative">
                      {price[1]}
                      <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                        eur
                      </small>
                    </span>
                  </div>
                )
                : (
                  <div>
                    <span className="position-relative">
                      {price[1]}
                      <small className="align-top text-uppercase mt-1 ml-1 position-absolute">
                        eur
                      </small>
                    </span>
                  </div>
                )
            }
          </span>
        </h4>
        <h5
          className="text-uppercase mb-3"
          dangerouslySetInnerHTML={{ __html: titleTwo }}
        />
        <p className="mb-5 font-weight-lighter">{content}</p>
        <button
          type="button"
          className="button-add-to-cart text-uppercase"
          onClick={() => {
            handleAddProductToCart(id);
          }}
        >
          {locale[lang].addToCart}
          {''}
          <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
        </button>
      </div>
      <p className="text-center text-blue text-uppercase">
        <Link href={knowMoreUrl} as={knowMoreUrlAs}>
          <a>
            {locale[lang].knowMore}
          </a>
        </Link>
      </p>
      <style jsx global>{styles}</style>
    </div>
  );
});

Product.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    price: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string,
    knowMoreUrl: PropTypes.string,
    knowMoreUrlAs: PropTypes.string,
  }).isRequired,
};

export default Product;
