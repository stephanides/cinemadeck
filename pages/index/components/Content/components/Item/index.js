/* eslint-disable react/prop-types */
import './scss/item.scss';
import React from 'react';


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

export default Item;
