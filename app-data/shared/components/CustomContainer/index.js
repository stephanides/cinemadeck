import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/CustomContainer.style';

const CustomContainer = ({ children, flex }) => (
  <div className={flex ? 'custom-container d-flex' : 'custom-container'}>
    { children }
    <style jsx>{styles}</style>
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
