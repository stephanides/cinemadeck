/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import {
  Container, InputGroup, InputGroupText, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/freeDownload.style';
import localisation from '../../../../app-data/shared/localisation/FreeDownload';

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
          <div className="text-holder">
            <p>{localisation[lang].email}</p>
            <InputGroup>
              <Input placeholder="Email" />
            </InputGroup>
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              <span>Súhlasím so všeobecnými podmienkami</span>
            </InputGroupText>
          </div>
          <button type="button" onClick={() => toggle(!modal)}>{localisation[lang].freeDownloadButton}</button>
          <img className={lang === 'cz' ? 'd-block free-image' : 'd-none free-image'} src="/static/images/freedownload/image.png" alt="" />
          <img className={lang === 'cz' ? 'd-none free-image' : 'd-block free-image'} src="/static/images/freedownload/en/image.png" alt="" />
        </Container>
      </Container>
<<<<<<< HEAD
=======
      <div>
        <Modal isOpen={modal} toggle={() => toggle(!modal)}>
          <ModalBody>
            <div className="text-holder">
              <p>{localisation[lang].email}</p>
              <InputGroup>
                <Input placeholder="Email" />
              </InputGroup>
              <Button type="button" className="modal-button">{localisation[lang].freeDownloadButton}</Button>
            </div>
            <img className={lang === 'cz' ? 'd-block free-image' : 'd-none free-image'} src="/static/images/freedownload/image.png" alt="" />
            <img className={lang === 'cz' ? 'd-none free-image' : 'd-block free-image'} src="/static/images/freedownload/en/image.png" alt="" />
          </ModalBody>
        </Modal>
      </div>
      <style jsx>{styles}</style>
>>>>>>> 9b6f10d2bef3894c1e16db1ac0590e719b604b4b
    </div>
  );
};

FreeDownload.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default FreeDownload;
