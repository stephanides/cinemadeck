import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './styles/item.style';

const Item = ({ itemData }) => {
  const { imageURL, header, text } = itemData;

  return (
    <div className="item">
      <LazyLoad height={50}>
        <img src={imageURL} alt="" />
      </LazyLoad>
      <div className="itemText">
        <h6>{header}</h6>
        <p>{text}</p>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

Item.propTypes = {
  itemData: PropTypes.shape({
    imageURL: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Item;
