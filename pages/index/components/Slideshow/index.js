/* eslint-disable react/no-danger */
import 'react-image-gallery/styles/css/image-gallery.css';
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import styles from './styles/slideshow.style';
import localisation from '../../../../app-data/shared/localisation/Slideshow';

const SlideShow = ({ lang }) => {
  const images = [
    {
      original: '/static/images/slideshow/0.jpg',
      thumbnail: '/static/images/slideshow/0.jpg',
    },
    {
      original: '/static/images/slideshow/1.jpg',
      thumbnail: '/static/images/slideshow/1.jpg',
    },
    {
      original: '/static/images/slideshow/2.jpg',
      thumbnail: '/static/images/slideshow/2.jpg',
    },
    {
      original: '/static/images/slideshow/3.jpg',
      thumbnail: '/static/images/slideshow/3.jpg',
    },
    {
      original: '/static/images/slideshow/4.jpg',
      thumbnail: '/static/images/slideshow/4.jpg',
    },
    {
      original: '/static/images/slideshow/5.jpg',
      thumbnail: '/static/images/slideshow/5.jpg',
    },
    {
      original: '/static/images/slideshow/6.jpg',
      thumbnail: '/static/images/slideshow/6.jpg',
    },
    {
      original: '/static/images/slideshow/7.jpg',
      thumbnail: '/static/images/slideshow/7.jpg',
    },
  ];
  return (
    <div className="slideshow" id="slideshow">
      <Container fluid>
        <Container>
          <h2 className="text-center">{localisation[lang].slideshowTitle}</h2>
        </Container>
        <ImageGallery items={images} />
      </Container>
      <style jsx>{styles}</style>
    </div>
  );
};

SlideShow.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default SlideShow;
