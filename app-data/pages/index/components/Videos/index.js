/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import styles from './styles/videos.style';
import localisation from '../../../../shared/localisation/Videos';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].videoText });

const Videos = ({ lang }) => (
  <div className="videos" id="videos">
    <Container fluid>
      <Container>
        <h2 className="text-center margin-bottom-60">{localisation[lang].videosTitle}</h2>
        <Carousel
          slidesPerPage={2}
          arrows
          infinite
          addArrowClickHandler
          // autoPlay={3000}
          stopAutoPlayOnHover
          // centered
          breakpoints={{
            1200: { // these props will be applied when screen width is less than 1000px
              slidesPerPage: 2,
              clickToChange: false,
              centered: false,
            },
            768: {
              slidesPerPage: 1,
              slidesPerScroll: 1,
              centered: true,
            },
          }}
        >
          <div className="video-holder">
            <div className="video">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/t-6JYGQsZ-s" title="video1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          <div className="video-holder">
            <div className="video">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/NzEVWRsa37U" title="video2" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          <div className="video-holder">
            <div className="video">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/yORUNVpnFB8" title="video3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          <div className="video-holder">
            <div className="video">
              <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/Hh9lcZCBazw" title="video3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </Carousel>
      </Container>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Videos.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Videos;
