import styled from 'styled-components';

const PdfStyled = styled.div`

  display: ${(props) => {
    if (props.pdf.running && !props.pdf.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  top: ${props => props.pdf.maximize ? '50px' : '80px' };
  right: ${props => props.pdf.maximize ? '0' : '0.8rem' };
  left: ${props => props.pdf.maximize ? '0' : '0.8rem' };
  height: ${props => props.pdf.maximize ? 'calc(100vh - 50px)' : '450px' };

  z-index: ${(props) => props.pdf.zIndex};

  .CV {
    height: 100%
  }

  .pdf-text {
    text-align: center
  }
`;

export default PdfStyled;
