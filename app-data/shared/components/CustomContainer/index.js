import React from 'react';
import './scss/customContainer.scss';

const CustomContainer = ({ children }) => (
  <div className="custom-container">
      { children }
  </div>
);

export default CustomContainer;