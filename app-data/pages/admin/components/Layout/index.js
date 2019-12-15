import '../../../../../static/css/bootstrap/bootstrap.min.css';
import '../../../../../static/css/fortawesome/fortawesome.min.css';

import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    <Container fluid className="vh-100 d-flex align-items-center pl-0 pr-0">
      { children }
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
