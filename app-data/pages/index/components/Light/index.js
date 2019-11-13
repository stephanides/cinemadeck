/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import CustomContainer from '../../../../shared/components/CustomContainer';

import styles from './styles/light.style';
import localisation from '../../../../shared/localisation/Light';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].lightLikeProExtraInfoContent });

const Light = ({ lang }) => (

  <div className="light" id="light">
    <Container fluid>
      <CustomContainer>
        <Container>
          <h1 className="text-center">{localisation[lang].packageCol3Header}</h1>
          <img loading="lazy" src="/static/images/light/LIGHT-PRO.png" alt="Karty CinemaDeck" />
          <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
        </Container>
      </CustomContainer>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Light.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Light;
