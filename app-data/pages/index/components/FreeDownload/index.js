/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import {
  Container, InputGroup, InputGroupText, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/freeDownload.style';
import localisation from '../../../../shared/localisation/FreeDownload';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].freeDownloadTitle });
const FreeDownload = ({ lang }) => {
  const [modal, toggle] = useState(false);

  return (
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
          <div className={modal ? 'text-holder show' : 'text-holder hide'}>
            <InputGroup>
              <Input placeholder={localisation[lang].email} />
            </InputGroup>
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              <span>{localisation[lang].gdpr}</span>
            </InputGroupText>
          </div>
          <button type="button" onClick={() => toggle(!modal)}>{localisation[lang].freeDownloadButton}</button>
          <img className="free-image" src={`/static/images/freedownload/${lang === 'cz' ? '' : 'en/'}image.png`} alt="" />
        </Container>
      </Container>
      <style jsx global>{styles}</style>
    </div>
  );
};

FreeDownload.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default FreeDownload;
