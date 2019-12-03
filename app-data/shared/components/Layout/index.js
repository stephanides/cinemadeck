import '../../../../static/css/bootstrap/bootstrap.min.css';
import '../../../../static/css/fortawesome/fortawesome.min.css';

import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Navigation from '../Navigation';
import GoPayRedirectModal from '../GoPayRedirectModal';

import styles from './styles/layout.style';

const Layout = ({
  cart, isCart, isHome, lang, children, goPayRedirect,
}) => {
  useEffect(() => {
    ReactGA.initialize('UA-152606775-1', {
      debug: true,
    });
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className={isCart ? 'bg-light' : undefined}>
      <GoPayRedirectModal lang={lang} show={goPayRedirect} />
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
};

Layout.defaultProps = {
  goPayRedirect: false,
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
  goPayRedirect: PropTypes.bool,
  isHome: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Layout;
