import styled from 'styled-components';
import { pxToRem, media } from 'styles';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`flex-direction: row;`}
  
  .user {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    ${media.md` padding-right: ${pxToRem(20)}`};

    flex: 0 0 100%;
    ${media.md`flex: 0 0 30%;`}

    &-add {
      background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
      line-height: ${pxToRem(20)};
      padding: ${pxToRem(3)} ${pxToRem(10)};
      border: ${pxToRem(1)} solid rgba(27, 31, 35, 0.2);
      border-radius: ${pxToRem(4)};
      color: #fff;
    }

    &-name {
      font-weight: bold;
      font-size: ${pxToRem(24)};

      &:not(:empty) {
        margin-right: ${pxToRem(15)};
      }
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
  }
`;

export { StyledUser };
