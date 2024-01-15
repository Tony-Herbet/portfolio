import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import LoaderStyled from './LoaderStyled';

const Loader = ({ switchLoading }) => {
  // Loader is display an arbitraty number of seconds to mimic an operating system booting
  useEffect(() => {
    const timer = setTimeout(() => {
      switchLoading();
    }, 3000);
    return () => clearTimeout(timer);
    // Why we do it that way: https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  }, []);

  return (
    <LoaderStyled>
      <div className='loader-container'>
        <span className="loader" />
        <p className='text'>Le système d'exploitation est en cours de démarrage...</p>
      </div>
    </LoaderStyled>
  );
};

Loader.propTypes = {
  switchLoading: PropTypes.func.isRequired,
};

export default Loader;
