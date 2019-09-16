/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import CustomContainer from '../../../../shared/components/CustomContainer';

import styles from './styles/about.style';
import localisation from '../../../../shared/localisation/About';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].aboutTitle });
const renderDangerHtmlText1 = (lang) => ({ __html: localisation[lang].aboutText1 });
const renderDangerHtmlText2 = (lang) => ({ __html: localisation[lang].aboutText2 });

const About = ({ lang }) => (

  <div className="about" id="about">
    <Container fluid>
      <CustomContainer>
        <Container>
          <h1 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
          <img loading="lazy" width={1095} height={588} src={`/static/images/aboutKarty/${lang === 'cz' ? '' : 'en/'}spoluKarty.png`} alt="Karty CinemaDeck" />
          <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtmlText1(lang)} />
          <p className="text-center mt-4" dangerouslySetInnerHTML={renderDangerHtmlText2(lang)} />
        </Container>
      </CustomContainer>
    </Container>
    <style jsx>{styles}</style>
  </div>
);

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
