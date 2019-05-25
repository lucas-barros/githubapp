import styled from 'styled-components';
import { pxToRem, media } from 'styles';

const StyledSearch = styled.div`
  width: 100%;

  input {
    width: 70%;
    ${media.md`width: 250px;`}
    height: ${pxToRem(25)};
    padding: ${pxToRem(10)};
    font-size: ${pxToRem(16)};
    background-color: #414549;
    border: 0;
    border-radius: ${pxToRem(2)};
    color: #7a7d80;
    outline: 0;
    transition: all 0.3s ease-out;
  }
  input:focus {
    width: 90%;
    ${media.md`width: 350px;`}

    transition: all 0.3s ease-out;
    background-color: #fff;
  }
`;

export { StyledSearch };
