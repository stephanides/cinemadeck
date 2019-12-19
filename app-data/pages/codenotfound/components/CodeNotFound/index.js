/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Footer from '../../../../shared/components/Footer';

import styles from './styles/codenotfound.style';
import localisation from '../../../../shared/localisation/CodeNotFound';


const CodeNotFound = ({ lang }) => (

  <div className="codenotfound" id="codenotfound">
    <Container fluid>
      <Container>
        <h1 className="text-center pb-4">{localisation[lang].title}</h1>
        <Link href="/">
          <a className="homelink">{localisation[lang].button}</a>
        </Link>
      </Container>
    </Container>
    <div className="position-relative footer">
      <Footer lang={lang} />
    </div>
    <style jsx>{styles}</style>
  </div>
);

CodeNotFound.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default CodeNotFound;
