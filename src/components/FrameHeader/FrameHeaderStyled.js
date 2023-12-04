import styled from 'styled-components';

const FrameHeaderStyled = styled.div`

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;

  .frame-name {
    padding: 0.3rem;
    flex-grow: 2;
  }

  .icons {
    display: flex;
    width: 85px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 0.2rem;
  }

  .icon-border {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-border:hover {
    background-color: hsl(0, 0%, 100%, 0.2)
  }

  .icon-container {
    border: solid 1px #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 100%;
    padding: 0.1rem;
    background-color: #AEA79F;
    height: 15px;
    width: 15px;
  }

  .icon {
    align-self: center;
    width: 12px;
    height: 12px;
  }
  
  .icon-x {
    background-color: red;
  }
`;

export default FrameHeaderStyled;
