/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LazyLoad from 'react-lazyload';
import Item from './components/Item';

import styles from './styles/content.style';
import localisation from '../../../../app-data/shared/localisation/Content';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].contentTitle });
const Content = ({ lang }) => (
  <div className="content" id="content">
    <Container fluid>
      <Container>
        <h2 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
      </Container>
      <div className="holder">
        <div className="left-items">
          <Item
            itemData={{
              imageURL: '/static/images/content/icon1.png',
              header: localisation[lang].contentCol1Header,
              text: localisation[lang].contentCol1Text,
            }}
          />
          <Item
            itemData={{
              imageURL: '/static/images/content/icon2.png',
              header: localisation[lang].contentCol2Header,
              text: localisation[lang].contentCol2Text,
            }}
          />
          <Item
            itemData={{
              imageURL: '/static/images/content/icon3.png',
              header: localisation[lang].contentCol3Header,
              text: localisation[lang].contentCol3Text,
            }}
          />
        </div>
        <div className="right-items">
          <div className="right-item">
            <LazyLoad height={20}>
              <img src="/static/images/content/lupa.png" alt="" />
            </LazyLoad>
            <p>105 mm</p>
          </div>
          <div className="right-item">
            <LazyLoad height={20}>
              <img src="/static/images/content/vzdialenost.png" alt="" />
            </LazyLoad>
            <p>3,5 m</p>
          </div>
          <div className="right-item">
            <LazyLoad height={20}>
              <img src="/static/images/content/uhol.png" alt="" />
            </LazyLoad>
            <p>30 °</p>
          </div>
          <div className="right-item">
            <LazyLoad height={20}>
              <img src="/static/images/content/iso.png" alt="" />
            </LazyLoad>
            <p>100 ISO</p>
          </div>
        </div>
      </div>
      <AnchorLink href="#package" className="content-button">{localisation[lang].contentButton}</AnchorLink>
    </Container>
    <style jsx global>{styles}</style>
  </div>
);

Content.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Content;
