import '../../../../static/css/bootstrap/bootstrap.min.css';
import '../../../../static/css/fortawesome/fortawesome.min.css';

import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

import styles from './styles/layout.style';

const Layout = ({
  cart, isCart, isHome, lang, children,
}) => (
  <div className={isCart ? 'bg-light' : undefined}>
    <Navigation
      cart={cart}
      lang={lang}
      isCart={isCart}
      isHome={isHome}
    />
    <Container fluid className="pl-0 pr-0">
      { children }
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Layout.defaultProps = {
  isCart: false,
  cart: [],
};
Layout.propTypes = {
  isCart: PropTypes.bool,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number,
      price: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
      }),
      title: PropTypes.string,
      totalPrice: PropTypes.shape({
        cz: PropTypes.number,
        en: PropTypes.number,
      }),
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
