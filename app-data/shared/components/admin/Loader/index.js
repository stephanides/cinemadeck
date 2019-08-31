import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Loader = ({ size }) => (
  <div className="loader-container">
    <div className="spin-object">
      <FontAwesomeIcon icon={faSpinner} size={size} fixedWidth />
    </div>
    <style jsx>
      {`
        .loader-container {
          height: 50px;
          margin: 0 auto;
          min-width: 500px;
          text-align: center;
          width: 100%;
        }
        .spin-object {
          animation:spin 4s linear infinite;
        }
        
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      `}
    </style>
  </div>
);

Loader.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Loader;
