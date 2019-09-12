/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './styles/author.style';
import localisation from '../../../../shared/localisation/Author';

const Author = ({ lang }) => (
  <div className="author" id="author">
    <Container fluid>
      <Container>
        <LazyLoad height={500}>
          <img className="author-image" src="/static/images/author/author.png" alt="" />
        </LazyLoad>
        <h5>Martin Hurai</h5>
        <h6>{localisation[lang].subtitle}</h6>
        <div className="text-holder">
          <p className="text-center">{localisation[lang].text1}</p>
          <p className="text-center">{localisation[lang].text2}</p>
        </div>
        <div className="social-networks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
            href="https://facebook.com/"
          >
            <img src="/static/images/author/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div className="email">
          <img src="/static/images/author/mail.png" alt="" />
          <a
            className="navbar-brand"
            href="mailto:info@cinemadeck.com"
          >
            info@cinemadeck.com
          </a>
        </div>
      </Container>
    </Container>
    <style jsx>{styles}</style>
  </div>
);

Author.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Author;
