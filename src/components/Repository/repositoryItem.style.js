import styled from 'styled-components';
import { pxToRem } from 'styles';

const StyledRepositoryItem = styled.div`
  border-bottom: 1px solid #e1e4e8;
  padding: ${pxToRem(24)} 0;

  &:first-of-type {
    border-top: 1px solid #e1e4e8;
  }

  .date {
    font-size: ${pxToRem(12)};
    color: #777;
  }
`;

export { StyledRepositoryItem };
