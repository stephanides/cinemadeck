/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import './scss/content.scss';
import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Content';
import Item from './components/Item';

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
              header: localisation[lang].contentCol2Header,
              text: localisation[lang].contentCol2Text,
            }}
          />
        </div>
        <div className="right-items">
          <div className="right-item">
            <img src="/static/images/content/lupa.png" alt="" />
            <p>105 mm</p>
          </div>
          <div className="right-item">
            <img src="/static/images/content/vzdialenost.png" alt="" />
            <p>3,5 m</p>
          </div>
          <div className="right-item">
            <img src="/static/images/content/uhol.png" alt="" />
            <p>30 °</p>
          </div>
          <div className="right-item">
            <img src="/static/images/content/iso.png" alt="" />
            <p>100 ISO</p>
          </div>
        </div>
      </div>
      <Link href="#">
        <a className="content-button">
          {localisation[lang].contentButton}
        </a>
      </Link>
    </Container>
  </div>
);

Content.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Content;
