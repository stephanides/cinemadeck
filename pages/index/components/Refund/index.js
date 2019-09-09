/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/refund.scss';
import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Refund';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].refundText3 });
const Refund = ({ lang }) => (
  <div className="refund" id="refund">
    <Container fluid>
      <Container>
        <img src="/static/images/refund/warranty.png" loading="lazyload" alt="" />
        <h2>{localisation[lang].refundTitle}</h2>
        <h6>{localisation[lang].refundSubTitle}</h6>
        <div className="text-holder">
          <p className="mb-0">{localisation[lang].refundText1}</p>
          <p className="font-weight-bold pt-0 mt-0">{localisation[lang].refundText2}</p>
          <p dangerouslySetInnerHTML={renderDangerHtml(lang)} />
          <p>{localisation[lang].refundText4}</p>
        </div>
        <Link href="/eshop/funnel">
          <a>{localisation[lang].buyCinemaDeck}</a>
        </Link>
      </Container>
    </Container>
  </div>
);

Refund.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Refund;
