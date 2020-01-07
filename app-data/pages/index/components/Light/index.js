/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import '../../../../../static/css/react-image-lightbox/style.min.css';
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import CustomContainer from '../../../../shared/components/CustomContainer';

import styles from './styles/light.style';
import localisation from '../../../../shared/localisation/Light';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].lightLikeProExtraInfoContent });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].lightLikeProContent });

const initialState = {
  photoIndex: 0,
  isLightBoxOpen: false,
};

const Light = ({ lang }) => {
  const [isLightBoxOpen, toggleLightBox] = useState(initialState.isLightBoxOpen);

  return (
    <>
      {
          isLightBoxOpen && (
          <Lightbox
            mainSrc={lang === 'cz' ? '/static/images/funnel/light-like-PRO-info.png' : '/static/images/funnel/light-like-PRO_EN-LS1.jpg'}
            onCloseRequest={() => toggleLightBox(false)}
          />
          )
      }
      <div className="light" id="light">
        <Container fluid>
          <CustomContainer>
            <Container>
              <h1 className="text-center">{localisation[lang].packageCol3Header}</h1>
              <img loading="lazy" src="/static/images/light/LIGHT-PRO.png" alt="Karty CinemaDeck" />
              <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
              <div className="product-image">
                <button
                  type="button"
                  onClick={() => toggleLightBox(true)}
                >
                  <img src={lang === 'cz' ? '/static/images/funnel/light-like-PRO-info-thumb.png' : '/static/images/funnel/light-like-PRO_EN-LS1-thumb.jpg'} alt="" />
                </button>
              </div>
            </Container>
          </CustomContainer>
        </Container>
        <style jsx global>{styles}</style>
      </div>
    </>
  );
};

Light.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Light;
