import styled from 'styled-components';

const PdfStyled = styled.div`

  display: ${(props) => {
    if (props.pdf.running && !props.pdf.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.pdf.zIndex};

  /* Position when maximize */
  top: ${props => props.pdf.maximize ? '50px' : '110px' };
  left: ${props => props.pdf.maximize ? '0' : '35vw' }; /* width should be vw - (right + left )*/
  right: ${props => props.pdf.maximize ? '0' : '0.8rem' };
  height: ${props => props.pdf.maximize ? 'calc(100vh - 52px)' : 'calc(90vh - 150px)' }; /* Screen size - taskbar + frames borders */

  /* Border when maximize */
  border: solid 1px ${props =>  props.pdf.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.pdf.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.pdf.maximize ? 0 : '0.5rem'};

  .CV {
    height: 100%
  }

  .pdf-text {
    text-align: center
  }
`;

export default PdfStyled;
