/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import locale from '../../../../../shared/localisation/eshop/order-success';

const Failed = ({ lang }) => (
  <>
    <div className="order-failed d-flex align-items-center justify-content-center mt-4 mb-4">
      <h2 className="text-uppercase w-100 text-center">{locale[lang].orderNotExist}</h2>
    </div>
    <div className="order-success-content pt-5">
      <p className="text-center">&nbsp;</p>
    </div>
  </>
);

Failed.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Failed;
