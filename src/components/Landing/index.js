import React from 'react';
import PropTypes from 'prop-types';

import LandingStyled from './LandingStyled';

import { t } from '../../helpers'

const Landing = ({closeLanding, switchLoading, language}) => {
  const handleClick = () => {
    switchLoading();
    closeLanding();
  }

  return (
    <LandingStyled className="landing">
      <div className='landing-content'>
        <h1 className='landing-title'>{t('landing_title', language)}</h1>
        <div className='landing-text'>
          <p>
            {t('landing_title', language)}  
          </p>
          <p>
            {t('landing_text_1', language)}  
          </p>
          <p>
            {t('landing_text_2', language)}  
          </p>
          <p>
            {t('landing_text_3', language)}  
          </p>
          <p>
            {t('landing_text_4', language)}  
          </p>
          <p>
            {t('landing_text_5', language)}  
          </p>
          <p>
            {t('landing_text_6', language)}  
          </p>
        </div>
        <button onClick={handleClick} >
          {t('landing_start_button', language)}  
        </button>
      </div>
    </LandingStyled>
  );
};

Landing.propTypes = {
  closeLanding: PropTypes.func.isRequired,
  switchLoading: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Landing;
