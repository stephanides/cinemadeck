/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { graphql } from 'react-apollo';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { toggleLangMutation } from '../../../graphql/mutation';
import CartContent from './components/CartContent';

import styles from './styles/navigation.style';
import localisation from '../../localisation/Navigation';

const Navigation = graphql(
  toggleLangMutation, { name: 'toggleLang' },
)(({
  cart, lang, isCart, isHome,
}) => {
  const router = useRouter();
  const [isOpen, toggle] = useState(false);
  const [cartReady, handleCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCart(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const checkPageTop = () => {
    const [isPageTop, handleIsPageTop] = useState(true);

    useEffect(() => {
      const checkTop = () => {
        const currentIsTop = window.scrollY < 100;

        if (currentIsTop !== isPageTop) {
          handleIsPageTop(currentIsTop);
        }
      };

      document.addEventListener('scroll', checkTop, true);

      return () => {
        document.removeEventListener('scroll', checkTop, true);
      };
    });

    return isPageTop;
  };

  const getLangUrl = (locale) => {
    let path = '/';
    let asUrl = '/';

    switch (router.pathname) {
      case '/':
        asUrl = `/${locale}/home`;
        path = `/?locale=${locale}`;
        break;
      case '/eshop':
        asUrl = `/${locale}/eshop`;
        path = `/eshop?locale=${locale}`;
        break;
      case '/eshop/cart':
        asUrl = `/${locale}/eshop/cart`;
        path = `/eshop/cart?locale=${locale}`;
        break;
      case '/eshop/funnel':
        asUrl = `/${locale}/eshop/funnel`;
        path = `/eshop/funnel?locale=${locale}`;
        break;
      case '/obchodni-podminky':
        asUrl = `/${locale}/obchodni-podminky`;
        path = `/obchodni-podminky?locale=${locale}`;
        break;
      case '/terms-conditions':
        asUrl = `/${locale}/terms-conditions`;
        path = `/obchodni-podminky?locale=${locale}`;
        break;
      case '/ochrana-osobnych-udaju':
        asUrl = `/${locale}/ochrana-osobnych-udaju`;
        path = `/ochrana-osobnych-udaju?locale=${locale}`;
        break;
      default:
        break;
    }

    return [asUrl, path];
  };

  const isTop = checkPageTop();
  const czUrl = getLangUrl('cz');
  const enUrl = getLangUrl('en');

  return (
    <div>
      <Navbar
        className={
          isHome
            ? (
              isTop ? 'fixed-top background navbar-lighter' : 'fixed-top scroll_background navbar-lighter'
            )
            : 'fixed-top bg-white navbar-light'
        }
        expand="md"
      >
        <Container fluid className="navigation_holder">
          <Link href={`/?locale=${lang}`} as={`/${lang}/home`}>
            <a className="navbar-brand">
              <img src={isHome ? '/static/images/logo-light.svg' : '/static/images/logo-dark.svg'} alt="Logo White" />
            </a>
          </Link>
          <NavbarToggler onClick={() => toggle(!isOpen)} />
          <div className="navbar-cart-info-holder">
            <div className={cart && cart.length > 0 ? 'navbar-cart-info show-pulse' : 'navbar-cart-info'}>
              { (cart && cart.length > 0) && cart.reduce((a, b) => (a + b.count), 0) }
            </div>
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav className={isHome ? 'ml-auto' : 'ml-auto not-homepage position-relative'} navbar>
              <NavItem>
                <Link href={czUrl[1]} as={czUrl[0]}>
                  <a onClick={() => toggle(!isOpen)}>{localisation[lang].czechLanguage}</a>
                </Link>
                <Link href={enUrl[1]} as={enUrl[0]}>
                  <a onClick={() => toggle(!isOpen)}>{localisation[lang].englishLanguage}</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={`/eshop?locale=${lang}`} as={`/${lang}/eshop`}>
                  <a onClick={() => toggle(!isOpen)} className="nav-link">ESHOP</a>
                </Link>
              </NavItem>
              <NavItem
                className={
                  ((!isHome && !isCart && cart && cart.length > 0) && cartReady)
                    ? 'move move-left' : 'move'
                }
              >
                {
                  !isHome
                    ? (
                      <Link href={`/?locale=${lang}#footer-main`} as={`/${lang}/home#footer-main`}>
                        <a className="nav-link pr-4">
                          {localisation[lang].contact}
                        </a>
                      </Link>
                    ) : (
                      <AnchorLink
                        href="#footer-main"
                        className="nav-link pr-4"
                        onClick={() => toggle(!isOpen)}
                      >
                        {localisation[lang].contact}
                      </AnchorLink>
                    )
                }
              </NavItem>
              <NavItem
                className={
                  ((!isHome && !isCart && (cart && cart.length > 0)) && cartReady)
                    ? 'cart-content move move-top' : 'cart-content'
                }
              >
                {
                  (!isCart && cartReady && !isHome && (cart && cart.length > 0)) && (
                    <CartContent
                      cart={cart}
                      lang={lang}
                    />
                  )
                }
              </NavItem>
              <NavItem>
                {
                  isHome && (
                    <AnchorLink
                      onClick={() => toggle(!isOpen)}
                      href="#free-download-point"
                      className="button-link"
                      offset="100"
                    >
                      {localisation[lang].download}
                    </AnchorLink>
                  )
                }
              </NavItem>
              <NavItem>
                <Link href={`/eshop/cart?locale=${lang}`} as={`/${lang}/eshop/cart`}>
                  <a onClick={() => toggle(!isOpen)} className="nav-link shopping-cart d-flex align-items-center">
                    <img src="/static/images/cart-logo.png" alt="" />
                    <div className="proceed-to-cart position-relative ml-2">
                      <span className="font-weight-bold position-absolute">
                        {
                          cart && cart.length > 0
                            ? cart.reduce((a, b) => (a + b.count), 0) : <div className="chevron-icon" />
                        }
                      </span>
                    </div>
                  </a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <style jsx global>{styles}</style>
    </div>
  );
});

Navigation.defaultProps = {
  isCart: false,
  cart: [],
};
Navigation.propTypes = {
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
  isCart: PropTypes.bool,
  isHome: PropTypes.bool.isRequired,
};

export default Navigation;
