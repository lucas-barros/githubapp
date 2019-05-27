import styled from 'styled-components';
import { pxToRem, media } from 'styles';

const StyledRepository = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`flex-direction: row;`}

  .owner {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    ${media.md` padding-right: ${pxToRem(20)}`};

    flex: 0 0 100%;
    ${media.md`flex: 0 0 30%;`}

    &-name {
      font-weight: bold;
      font-size: ${pxToRem(24)};
    }

    &-avatar {
      height: auto;
      width: 100%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.22);
      border: ${pxToRem(1)} solid #999;
      margin-bottom: ${pxToRem(15)};
    }
  }
  .repositories {
    flex: 0 0 100%;
    ${media.md`flex: 0 0 70%;`}

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
  }
`;

export { StyledRepository };
