/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import locale from '../../../../../shared/localisation/eshop/order-success';

const Failed = ({ lang }) => (
  <>
    <div className="order-failed d-flex align-items-center justify-content-center mt-3 mb-3">
      <h2 className="text-uppercase w-100 text-center">{locale[lang].paymentFailed}</h2>
    </div>
    <div className="order-success-content">
      <p className="text-center">
        <Link href={`/eshop/cart?locale=${lang}`} as={`/${lang}/eshop/cart`}>
          <a>{locale[lang].returnToShopBtn}</a>
        </Link>
      </p>
    </div>
  </>
);

Failed.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Failed;
