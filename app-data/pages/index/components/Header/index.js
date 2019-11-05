/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CustomContainer from '../../../../shared/components/CustomContainer';

import styles from './styles/header.style';
import localisation from '../../../../shared/localisation/Header';

const renderDangerHtmlHeader = (lang) => ({ __html: localisation[lang].headerText1 });
const renderDangerHtml = (lang) => ({ __html: localisation[lang].headerText2 });

const Header = ({ lang }) => (
  <div className="header" id="header">
    <Container fluid>
      <CustomContainer>
        <img src="/static/images/vizual.jpg" alt="Vizuál" />
        <div className="text_holder">
          <p dangerouslySetInnerHTML={renderDangerHtmlHeader(lang)} />
          <h3 className="pt-4" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
        </div>
        <Link href={`/eshop/funnel?locale=${lang}`} as={`/${lang}/eshop/funnel`}>
          <a>{localisation[lang].findOutMore}</a>
        </Link>
      </CustomContainer>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
