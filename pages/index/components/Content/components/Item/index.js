import './scss/item.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemData }) => {
  const { imageURL, header, text } = itemData;

  return (
    <div className="item">
      <img src={imageURL} alt="" />
      <div className="itemText">
        <h6>{header}</h6>
        <p>{text}</p>
      </div>
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
