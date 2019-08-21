/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/videos.scss';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Navigation';

const Videos = ({ lang }) => (
  <div className="videos" id="videos">
    <Container fluid>
      <Container>
        <h2 className="text-center">{localisation[lang].videosTitle}</h2>
        <Row>
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video" />
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="video-holder">
              <div className="video" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

Videos.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Videos;
