import styled from 'styled-components';
import { pxToRem, media } from 'styles';

const StyledRepositoryList = styled.div`
  .repositories {
    flex: 0 0 100%;
    ${media.md`flex: 0 0 70%;`}
  }
  .pagination {
    margin-top: ${pxToRem(30)};
    text-align: center;

    button {
      background-color: #fff;
      box-shadow: none;
      color: #0366d6;
      border: 1px solid rgba(27, 31, 35, 0.2);
      padding: ${pxToRem(6)} ${pxToRem(12)};
      cursor: pointer;

      &:first-of-type {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
      }

      &:last-of-type {
        border-bottom-right-radius: 3px;
        border-right-width: 1px;
        border-top-right-radius: 3px;
      }

      &:disabled {
        cursor: initial;
        color: rgba(27, 31, 35, 0.2);
      }
    }
  }
`;

export { StyledRepositoryList };
