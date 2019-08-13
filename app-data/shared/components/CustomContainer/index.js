import './scss/customContainer.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CustomContainer = ({ children, flex }) => (
  <div className={flex ? 'custom-container d-flex' : 'custom-container'}>
    { children }
  </div>
);

CustomContainer.defaultProps = {
  flex: false,
};
CustomContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  flex: PropTypes.bool,
};

export default CustomContainer;
