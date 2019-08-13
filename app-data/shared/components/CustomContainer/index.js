import React from 'react';
import './scss/customContainer.scss';

const CustomContainer = ({ children, flex }) => (
  <div className={flex ? "custom-container d-flex" : "custom-container"}>
      { children }
  </div>
);

export default CustomContainer;