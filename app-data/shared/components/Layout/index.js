import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Layout = ({
  cart, isHome, lang, children,
}) => (
  <div>
    <Navigation
      cart={cart}
      lang={lang}
      isHome={isHome}
    />
    <Container fluid className="pl-0 pr-0">
      { children }
    </Container>
  </div>
);

Layout.defaultProps = {
  cart: [],
};
Layout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      price: PropTypes.number,
      title: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isHome: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Layout;
