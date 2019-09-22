/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { addProductToCartMutation } from '../../../../graphql/mutation';
import styles from './styles/refund.style';
import localisation from '../../../../shared/localisation/Refund';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].refundText3 });
const Refund = graphql(addProductToCartMutation)(({ lang, mutate }) => {
  const handleAddProductToCart = async () => {
    try {
      await mutate({ variables: { id: '001' } });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="refund" id="refund">
      <Container fluid>
        <Container>
          <LazyLoad height={250}>
            <img src="/static/images/refund/warranty.png" loading="lazyload" alt="" />
          </LazyLoad>
          <h2>{localisation[lang].refundTitle}</h2>
          <h6>{localisation[lang].refundSubTitle}</h6>
          <div className="text-holder">
            <p className="mb-0">{localisation[lang].refundText1}</p>
            <p className="font-weight-bold pt-0 mt-0">{localisation[lang].refundText2}</p>
            <p dangerouslySetInnerHTML={renderDangerHtml(lang)} />
            <p>{localisation[lang].refundText4}</p>
          </div>
          <Link href="/eshop/funnel">
            <button
              type="button"
              onClick={handleAddProductToCart}
              className="btn btn-link"
            >
              {localisation[lang].buyCinemaDeck}
            </button>
          </Link>
        </Container>
      </Container>
      <style jsx>{styles}</style>
    </div>
  );
});

Refund.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Refund;
