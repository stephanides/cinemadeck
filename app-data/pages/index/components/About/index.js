/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CustomContainer from '../../../../shared/components/CustomContainer';

import styles from './styles/about.style';
import localisation from '../../../../shared/localisation/About';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].aboutTitle });
const renderDangerHtml2 = (lang) => ({ __html: localisation[lang].aboutSubTitle });

const About = ({ lang }) => (

  <div className="about" id="about">
    <Container fluid>
      <CustomContainer>
        <Container>
          <img loading="lazy" className="logo-image" src="/static/images/logo-light.svg" alt="Karty CinemaDeck" />
          <h1 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
          <h2 className="text-center" dangerouslySetInnerHTML={renderDangerHtml2(lang)} />
          <img loading="lazy" src={`/static/images/aboutKarty/${lang === 'cz' ? '' : 'en/'}spoluKarty.png`} alt="Karty CinemaDeck" />
          <div className="link_holder">
            <AnchorLink
              href="#free-download-point"
              className="button-link"
              offset="100"
            >
              {localisation[lang].try}
            </AnchorLink>
          </div>
        </Container>
      </CustomContainer>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
