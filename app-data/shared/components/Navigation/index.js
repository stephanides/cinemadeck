import React, { useState } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import { toggleLangMutation } from '../../../graphql/mutation';
import CustomContainer from '../CustomContainer';
import localisation from '../../localisation/Navigation';
import './scss/navigation.scss';

const Navigation = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
  graphql(toggleLangMutation, { name: 'toggleLang' }),
)(({ getLocale: { lang }, toggleLang }) => {

  const [isOpen, toggle] = useState(false);


  return (
    <Navbar className= 'fixed-top p-0' expand="md">
      <CustomContainer className="d-flex">
      <NavbarBrand href="/">
          <img src="/static/images/logo.png" alt="Logo White" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() =>toggle(!isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
              <AnchorLink href="#services" className="nav-link" onClick={() => toggle(!isOpen)}>ESHOP</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#licence" className="nav-link" onClick={() => toggle(!isOpen)}>{localisation[lang].contact}</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#licence" className="nav-link button-link" onClick={() => toggle(!isOpen)}>{localisation[lang].download}</AnchorLink>
            </NavItem>
          </Nav>
        </Collapse>
      </CustomContainer>
    </Navbar>
  );
});

export default Navigation;
