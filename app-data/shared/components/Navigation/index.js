import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import { toggleLangMutation } from '../../../graphql/mutation';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';
import './scss/navigation.scss';

const Navigation = graphql(
  toggleLangMutation, { name: 'toggleLang' },
)(({ lang, isHome, toggleLang }) => {
  const [isOpen, toggle] = useState(false);

  return (
    <Navbar className="fixed-top p-0" expand="md">
      <CustomContainer flex>
        <NavbarBrand href="/">
          <img src={isHome ? '/static/images/logo.png' : '/static/images/logo-dark.png'} alt="Logo White" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => toggle(!isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={isHome ? 'ml-auto' : 'ml-auto not-homepage'} navbar>
            <NavItem>
              <button
                type="button"
                className="btn btn-link"
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
                className="btn btn-link"
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
              <AnchorLink
                href="/eshop"
                className="nav-link"
                onClick={() => toggle(!isOpen)}
              >
                ESHOP
              </AnchorLink>
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
              <AnchorLink
                href="#licence"
                className="nav-link button-link"
                onClick={() => toggle(!isOpen)}
              >
                {localisation[lang].download}
              </AnchorLink>
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
