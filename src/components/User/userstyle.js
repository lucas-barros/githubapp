import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledUser = styled.div`
  display: flex;
  padding: ${pxToRem(5)};

  .user-avatar {
    align-self: center;
    height: auto;
    width: 30px;
  }
`;

export { StyledUser };
