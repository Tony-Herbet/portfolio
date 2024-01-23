import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import LoaderStyled from './LoaderStyled';

import { t } from '../../helpers'

const Loader = ({ switchLoading, language }) => {
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
        <p className='text'>{t('loader_text', language)}</p>
      </div>
    </LoaderStyled>
  );
};

Loader.propTypes = {
  switchLoading: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Loader;
