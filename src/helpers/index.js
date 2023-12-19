import background1 from 'assets/images/backgrounds/1.png';
import background2 from 'assets/images/backgrounds/2.jpg';
import background3 from 'assets/images/backgrounds/3.jpg';
import background4 from 'assets/images/backgrounds/4.jpg';

const handleCurrentBackground = (background) => {
  return background === 'background1' ? background1 
    : background === 'background2' ? background2 
    : background === 'background3' ? background3
    : background === 'background4' ? background4 
    : background1
}

export default handleCurrentBackground