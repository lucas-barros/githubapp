import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledUserCard = styled.div`
  padding: ${pxToRem(5)};

  .user-avatar {
    align-self: center;
    height: auto;
    width: 30px;
    cursor: pointer;
  }
`;

export { StyledUserCard };
