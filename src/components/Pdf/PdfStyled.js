import styled from "styled-components";

const PdfStyled = styled.div`
  display: ${(props) => {
    if (props.pdf.running) {
      return "flex";
    }
    return "none";
  }};

  z-index: ${(props) => props.pdf.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.pdf.maximize) {
      return "50px";
    }
    // Minimize
    else if (props.pdf.running && props.pdf.minimize) {
      return "-100vh";
    }
    // Default
    else {
      return `${props.pdf.y}px`;
    }
  }};
  left: ${(props) => {
    // Maximize
    if (props.pdf.maximize) {
      return "0";
    }
    // Minimize
    else if (props.pdf.running && props.pdf.minimize) {
      return "50vw";
    }
    // Default
    else {
      return `${props.pdf.x}px`;
    }
  }};
  width: ${(props) => {
    // Maximize
    if (props.pdf.maximize) {
      return "100vw";
    }
    // Minimize
    else if (props.pdf.running && props.pdf.minimize) {
      return "0%";
    }
    // Default
    else {
      return `${props.pdf.width}vw`;
    }
  }};
  height: ${(props) =>
    props.pdf.maximize ? "calc(100vh - 52px)" : `${props.pdf.height}vh`};

  opacity: ${(props) =>
    props.pdf.minimize ? "0" : "1"}; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 2px
    ${(props) => (props.pdf.maximize ? "transparent" : props.theme.accent)};
  border-top-left-radius: ${(props) => (props.pdf.maximize ? 0 : "0.5rem")};
  border-top-right-radius: ${(props) => (props.pdf.maximize ? 0 : "0.5rem")};

  .pdf-object {
    height: 100%;
    display: flex;
  }

  .pdf-object > p {
    padding: 1rem;
  }

  .overlay {
    display: ${(props) =>
      props.pdf.focus
        ? "none"
        : "block"}; /* enable/disable the onClick on the iframe */
    position: absolute;
    top: 30px
      /* frameHeader size, this is important to be able to hover/click on the "-ox" buttons */;
    left: 0;
    right: 0;
    height: 100%;
  }

  @media (width < 1024px) {
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default PdfStyled;
