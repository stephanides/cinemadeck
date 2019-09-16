import '../../../../../static/css/bootstrap/bootstrap.min.css';
import '../../../../../static/css/fortawesome/fortawesome.min.css';

import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Layout = ({
  children, userName,
}) => (
  <div>
    <Navigation
      userName={userName}
    />
    <Container>
      { children }
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  userName: PropTypes.string.isRequired,
};

export default Layout;
