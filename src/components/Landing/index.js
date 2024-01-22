import React from 'react';
import PropTypes from 'prop-types';

import LandingStyled from './LandingStyled';

const Landing = ({closeLanding, switchLoading}) => {
  const handleClick = () => {
    switchLoading();
    closeLanding();
  }

  return (
    <LandingStyled className="landing">
      <div className='landing-content'>
        <h1 className='landing-title'>Bienvenue sur le portfolio de Herbet Le Faucheur Tony</h1>
        <div className='landing-text'>
          <p>
            Ce site a été pensé et réalisé pour une utilisation sur ordinateur, je vous invite donc à le faire si ce n'est pas le cas.
          </p>
          <p>
            Le concept est d'émuler un système d'exploitation et de naviguer dessus comme tel.
          </p>
          <p>
            Pour voir directement mes informations, vous pouvez cliquer sur l'icone contenant l'inscription "pdf" ce qui ouvrira mon curriculum vitae.
          </p>
          <p>
            Pour me contacter par mail, cliquer sur l'icone en forme de "M".
          </p>
          <p>
            Je vous laisse découvrir le reste des fonctionnalités.
          </p>
          <p>
            Pour commencer l'expérience, merci de cliquer sur le bouton ci-dessous.
          </p>
        </div>
        <button onClick={handleClick} >Démarrer</button>
      </div>
    </LandingStyled>
  );
};

Landing.propTypes = {
  closeLanding: PropTypes.func.isRequired,
  switchLoading: PropTypes.func.isRequired,
};

export default Landing;
