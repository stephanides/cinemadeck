/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/navigation.scss';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { toggleLangMutation } from '../../../graphql/mutation';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';

const Navigation = graphql(
  toggleLangMutation, { name: 'toggleLang' },
)(({ lang, isHome, toggleLang }) => {
  const [isOpen, toggle] = useState(false);

  return (
    <Navbar className="sticky-top" expand="md">
      <CustomContainer flex>
        <Link href="/">
          <a className="navbar-brand">
            <img src={isHome ? '/static/images/logo.png' : '/static/images/logo-dark.png'} alt="Logo White" />
          </a>
        </Link>
        <NavbarToggler
          onClick={() => toggle(!isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={isHome ? 'ml-auto' : 'ml-auto not-homepage'} navbar>
            <NavItem>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await toggleLang({
                      variables: { lang: lang === 'cz' ? 'en' : 'cz' },
                    });
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
                    await toggleLang({
                      variables: { lang: lang === 'cz' ? 'en' : 'cz' },
                    });
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
            <NavItem>
              <AnchorLink
                href="#licence"
                className="nav-link"
                onClick={() => toggle(!isOpen)}
              >
                {localisation[lang].contact}
              </AnchorLink>
            </NavItem>
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
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className="proceed-to-cart d-flex align-items-center justify-content-center ml-2">
                          <span className="font-weight-bold d-flex align-items-center">
                            <FontAwesomeIcon icon={faGreaterThan} />
                          </span>
                        </div>
                      </a>
                    </Link>
                  )
              }
            </NavItem>
          </Nav>
        </Collapse>
      </CustomContainer>
    </Navbar>
  );
});

Navigation.propTypes = {
  isHome: PropTypes.bool.isRequired,
};

export default Navigation;
