import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';

import locale from '../../../../../shared/localisation/eshop/order-success';

const Success = ({ handleDownloadZip, imgSrc, lang }) => (
  <>
    <div className="order-success-head d-flex align-items-center justify-content-center mt-3">
      <h1 className="text-uppercase w-100 text-center">{locale[lang].welcomeToFamily}</h1>
      <h2 className="text-uppercase w-100 text-center">{locale[lang].downloadFIlesBelow}</h2>
    </div>
    <div className="order-success-content">
      <LazyLoad height={350}>
        <img className="d-block mx-auto pb-4" src={`/static/images/${imgSrc}`} alt="" />
      </LazyLoad>
      <button
        type="button"
        className="text-uppercase d-block mt-4 mb-4 mx-auto"
        onClick={handleDownloadZip}
      >
        {locale[lang].downloadBtn}
      </button>
      <p className="text-center my-5">
        {locale[lang].descriptionText}
      </p>
    </div>
  </>
);

Success.propTypes = {
  handleDownloadZip: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Success;
