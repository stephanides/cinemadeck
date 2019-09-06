/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/navigation.scss';
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { toggleLangMutation } from '../../../graphql/mutation';
import CartContent from './components/CartContent';
import localisation from '../../localisation/Navigation';

const Navigation = graphql(
  toggleLangMutation, { name: 'toggleLang' },
)(({
  cart, lang, isCart, isHome, toggleLang,
}) => {
  const [isOpen, toggle] = useState(false);
  const [isTop, isPageTop] = useState(true);

  useEffect(() => {
    const checkTop = () => {
      const currentIsTop = window.scrollY < 100;
      if (currentIsTop !== isTop) {
        isPageTop(currentIsTop);
      }
    };

    checkTop();
    document.addEventListener('scroll', () => {
      checkTop();
    }, []);
  });

  return (
    <Navbar
      className={
        isHome
          ? (
            isTop ? 'fixed-top background' : 'fixed-top scroll_background'
          )
          : 'fixed-top bg-white navbar-light'
      }
      expand="md"
    >
      <Container fluid className="navigation_holder">
        <Link href="/">
          <a className="navbar-brand">
            <img src={isHome ? '/static/images/logo.png' : '/static/images/logo-dark.png'} alt="Logo White" />
          </a>
        </Link>
        <NavbarToggler
          onClick={() => toggle(!isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={isHome ? 'ml-auto' : 'ml-auto not-homepage position-relative'} navbar>
            <NavItem>
              <button
                type="button"
                onClick={async () => {
                  try {
                    if (lang !== 'cz') {
                      await toggleLang({
                        variables: { lang: 'cz' },
                      });
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                {localisation[lang].czechLanguage}
              </button>
              <button
                type="button"
                onClick={async () => {
                  try {
                    if (lang !== 'en') {
                      await toggleLang({
                        variables: { lang: 'en' },
                      });
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                {localisation[lang].englishLanguage}
              </button>
            </NavItem>
            <NavItem>
              <Link href="/eshop">
                <a className="nav-link">ESHOP</a>
              </Link>
            </NavItem>
            <NavItem
              className={
                (!isHome && !isCart && cart && cart.length > 0)
                  ? 'move move-left' : 'move'
              }
            >
              <AnchorLink
                href="#licence"
                className="nav-link pr-4"
                onClick={() => toggle(!isOpen)}
              >
                {localisation[lang].contact}
              </AnchorLink>
            </NavItem>
            {
              !isCart && (
                <NavItem
                  className={
                    (!isHome && cart && cart.length > 0)
                      ? 'cart-content move move-top' : 'cart-content move'
                  }
                >
                  <CartContent cart={cart} />
                </NavItem>
              )
            }
            <NavItem>
              {
                isHome
                  ? (
                    <button
                      type="button"
                      className="nav-link button-link"
                      onClick={() => console.log('DOWNLOAD FREE FILES')}
                    >
                      {localisation[lang].download}
                    </button>
                  ) : (
                    <Link href="/eshop/cart">
                      <a className="nav-link shopping-cart d-flex align-items-center">
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
                  )
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
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
      price: PropTypes.number,
      title: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
  isCart: PropTypes.bool,
  isHome: PropTypes.bool.isRequired,
};

export default Navigation;
