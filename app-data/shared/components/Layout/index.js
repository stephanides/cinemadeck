import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Layout = ({ lang, children }) => (
  <div>
    <Navigation lang={lang} />
    <Container fluid className="pl-0 pr-0">
      { children }
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  lang: PropTypes.string.isRequired,
};

export default Layout;
