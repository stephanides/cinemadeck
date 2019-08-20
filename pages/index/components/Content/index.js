/* eslint-disable react/no-danger */
import './scss/content.scss';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import localisation from '../../../../app-data/shared/localisation/Navigation';
import Item from './components/Item';

const renderDangerHtml = (lang) => ({ __html: localisation[lang].contentTitle });
const Content = ({ lang }) => (
  <div className="content" id="content">
    <Container fluid>
      <Container>
        <h2 className="text-center" dangerouslySetInnerHTML={renderDangerHtml(lang)} />
      </Container>
      <div className="left-items">
        <Item
          itemData={{
            imageURL: '/static/images/CARD-BOX.png',
            header: 'Cards',
            text: 37,
          }}
        />
      </div>
    </Container>
  </div>
);

Content.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Content;
