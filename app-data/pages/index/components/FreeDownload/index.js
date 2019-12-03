/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import {
  Container, InputGroup, InputGroupText, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles/freeDownload.style';
import localisation from '../../../../shared/localisation/FreeDownload';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].freeDownloadTitle });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].gdpr });

const FreeDownload = ({ lang }) => {
  const [modal, toggle] = useState(false);
  const [highlightFD, switchHFD] = useState(false);

  const handleEmail = (e) => {
    const emailInput = e.currentTarget.value;
    const emailTestString = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = emailTestString.test(emailInput.toLowerCase());

    if (emailTest) {
      switchHFD(true);
    }
  };
  const handleDownloadFreeDoc = async () => {
    try {
      const zip = new JSZip();
      const file = await JSZipUtils.getBinaryContent(`/static/download/${lang}/CinemaDeck Free Card (${lang.toUpperCase()}).pdf`);

      zip.file(`CinemaDeck Free Card (${lang.toUpperCase()}).pdf`, file, { binary: true });

      const zipContentBlob = await zip.generateAsync({ type: 'blob' });

      saveAs(zipContentBlob, 'CinemaDeckFreeCard.zip');
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubscribe = (data) => {
    const { checked } = document.getElementById('agreeData');

    if (checked) {
      const xhr = new XMLHttpRequest();
      const url = lang === 'cz'
        ? 'https://thecinemadeck.ecomailapp.cz/public/subscribe/2/2bb287d15897fe2f9d89c882af9a3a8b'
        : 'https://thecinemadeck.ecomailapp.cz/public/subscribe/3/b6fcc542fb021c84fdaff536dd0a74a1';

      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = () => {
        if (xhr.status === 200 && xhr.responseText) {
          console.log(xhr.responseText);
          handleDownloadFreeDoc();
        } else if (xhr.status !== 200) {
          console.log(xhr.status);
        }
      };

      xhr.send(encodeURI(`email=${data}`));
    }
  };
  const handleToggle = () => {
    const email = document.getElementById('email').value;

    if (email && email.indexOf('@') > -1) {
      handleSubscribe(email);
    }
    toggle(!modal);
  };
  // TODO: create handler to reset "highlightFD" to false after hit of the download button

  return (
    <div className="freedownload" id="freedownload">
      <div id="free-download-point" className="free-download-point" />
      <Container fluid className="borders">
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
            {
              /*
                <div className="check-item d-flex align-items-center mb-1">
                  <img src="/static/images/freedownload/check.png" alt="" />
                  <p className="pl-3">{localisation[lang].freeDownloadText4}</p>
                </div>
              */
            }
            <div className="check-item d-flex align-items-center mb-1">
              <img src="/static/images/freedownload/check.png" alt="" />
              <p className="pl-3">{localisation[lang].freeDownloadText5}</p>
            </div>
            <div className="check-item d-flex align-items-center mb-1">
              <img src="/static/images/freedownload/check.png" alt="" />
              <p className="pl-3">{localisation[lang].freeDownloadText6}</p>
            </div>
          </div>
          <div className={modal ? 'text-holder show' : 'text-holder hide'}>
            <InputGroup>
              <Input placeholder={localisation[lang].email} id="email" onChange={handleEmail} />
            </InputGroup>
            <InputGroupText>
              <Input addon type="checkbox" id="agreeData" aria-label="Checkbox for following text input" />
              <Link href={`/${lang}/ochrana-osobnych-udaju?locale=${lang}`} as={`/${lang}/ochrana-osobnych-udaju`}>
                <span dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
              </Link>
            </InputGroupText>
          </div>
          <button
            type="button"
            className={highlightFD ? 'free-download-file' : undefined}
            onClick={handleToggle}
          >
            {localisation[lang].freeDownloadButton}
          </button>
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
