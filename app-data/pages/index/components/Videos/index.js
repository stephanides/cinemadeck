/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './styles/videos.style';
import localisation from '../../../../shared/localisation/Videos';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].videoText });

const Videos = ({ lang }) => (
  <div className="videos" id="videos">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].videosTitle}</h2>
        <Row className="justify-content-center">
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t-6JYGQsZ-s" title="video1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NzEVWRsa37U" title="video2" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yORUNVpnFB8" title="video3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hh9lcZCBazw" title="video3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <style jsx>{styles}</style>
  </div>
);

Videos.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Videos;
