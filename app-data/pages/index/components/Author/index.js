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
        <div className="email">
          <img src="/static/images/author/mail.png" alt="" />
          <a
            className="navbar-brand"
            href="mailto:martin@thecinemadeck.com"
          >
            martin@thecinemadeck.com
          </a>
        </div>
        <div className="social-networks">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
            href="https://www.facebook.com/thecinemadeck/?view_public_for=105361277606740"
          >
            <img src="/static/images/author/facebook.png" alt="Facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
            href="https://www.youtube.com/channel/UC8ikhdM8fWu87pZ72E0aR9A"
          >
            <img src="/static/images/author/youtube.png" alt="Youtube" />
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
