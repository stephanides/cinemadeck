/* eslint-disable react/no-danger */
import './scss/about.scss';
import React, { useEffect } from 'react';
// import Coverflow from 'react-coverflow';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import CustomContainer from '../../../../app-data/shared/components/CustomContainer';
import localisation from '../../../../app-data/shared/localisation/About';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].aboutTitle });
const renderDangerHtmlText1 = (lang) => ({ __html: localisation[lang].aboutText1 });
const renderDangerHtmlText2 = (lang) => ({ __html: localisation[lang].aboutText2 });

const About = ({ lang }) => {
  let carouselComponent = null;

  useEffect(() => {
    if (process.browser) {
      console.log('browser');
      carouselComponent = 'browser';
    }
  }, []);

  console.log(carouselComponent);

  return (
    <div className="about" id="about">
      <Container fluid>
        <CustomContainer>
          <Container>
            <h1 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
            {
              // process.env.browser && (carouselComponent)
              /*
                (
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px',
            },
            '@media (min-width: 900px)': {
              width: '960px',
              height: '600px',
            },
          }}
        >
          <img src="/static/images/aboutKarty/5.png" alt="" data-action="https://facebook.github.io/react/"/>
          <img src="/static/images/aboutKarty/5.png" alt="" data-action="http://passer.cc"/>
          <img src="/static/images/aboutKarty/5.png" alt="" data-action="https://doce.cc/"/>
          <img src="/static/images/aboutKarty/5.png" alt="'Album four'" data-action="http://tw.yahoo.com"/>
        </Coverflow>
      )
              */
            }
            <p className="text-center mt-text" dangerouslySetInnerHTML={renderDangerHtmlText1(lang)} />
            <p className="text-center mt-4" dangerouslySetInnerHTML={renderDangerHtmlText2(lang)} />
          </Container>
        </CustomContainer>
      </Container>
    </div>
  );
};

About.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default About;
