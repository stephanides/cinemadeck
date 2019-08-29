/* eslint-disable react/no-danger */
import './scss/freeDownload.scss';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/FreeDownload';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].freeDownloadTitle });
const FreeDownload = ({ lang }) => (
  <div className="freedownload" id="freedownload">
    <Container fluid>
      <Container>
        <h2 dangerouslySetInnerHTML={renderDangerHtml(lang)} />
        <p className="freetext">{localisation[lang].freeDownloadText}</p>
        <p className="font-weight-bold">{localisation[lang].freeDownloadTextBold}</p>
        <div className="check-holder">
          <div className="check-item d-flex align-items-center mb-1">
            <img src="/static/images/freedownload/check.png" alt="" />
            <p className="pl-3">{localisation[lang].freeDownloadText1}</p>
          </div>
          <div className="check-item d-flex align-items-center mb-1">
            <img src="/static/images/freedownload/check.png" alt="" />
            <p className="pl-3">{localisation[lang].freeDownloadText3}</p>
          </div>
          <div className="check-item d-flex align-items-center mb-1">
            <img src="/static/images/freedownload/check.png" alt="" />
            <p className="pl-3">{localisation[lang].freeDownloadText4}</p>
          </div>
        </div>
        <button type="button">{localisation[lang].freeDownloadButton}</button>
        <img className="free-image" src="/static/images/freedownload/image.png" alt="" />
      </Container>
    </Container>
  </div>
);

FreeDownload.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default FreeDownload;
