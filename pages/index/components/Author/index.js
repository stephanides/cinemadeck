/* eslint-disable jsx-a11y/anchor-is-valid */

import './scss/author.scss';
import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Author';

const Author = ({ lang }) => (
  <div className="author" id="author">
    <Container fluid>
      <Container>
        <img className="author-image" src="/static/images/author/author.png" alt="" />
        <h5>Martin Hurai</h5>
        <h6>{localisation[lang].subtitle}</h6>
        <div className="text-holder">
          <p className="text-center">{localisation[lang].text1}</p>
          <p className="text-center">{localisation[lang].text2}</p>
        </div>
        <div className="social-networks">
          <Link href="https://twitter.com">
            <a target="_blank" className="navbar-brand">
              <img src="/static/images/author/twitter.png" alt="Twitter" />
            </a>
          </Link>
          <Link href="https://facebook.com">
            <a target="_blank" className="navbar-brand">
              <img src="/static/images/author/facebook.png" alt="Facebook" />
            </a>
          </Link>
          <Link href="https://youtube.com">
            <a target="_blank" className="navbar-brand">
              <img src="/static/images/author/youtube.png" alt="Youtube" />
            </a>
          </Link>
        </div>
        <div className="email">
          <img src="/static/images/author/mail.png" alt="" />
          <Link href="mailto:info@cinemadeck.com">
            <a className="navbar-brand">
              info@cinemadeck.com
            </a>
          </Link>
        </div>
      </Container>
    </Container>
  </div>
);

Author.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Author;
