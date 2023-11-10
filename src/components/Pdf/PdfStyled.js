import styled from 'styled-components';

const PdfStyled = styled.div`

  display: ${(props) => {
    if (props.pdf.running && !props.pdf.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.pdf.zIndex};

  .CV {
    height: 100%
  }

  .pdf-text {
    text-align: center
  }
`;

export default PdfStyled;
