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

    &-button {
      line-height: ${pxToRem(20)};
      padding: ${pxToRem(3)} ${pxToRem(10)};
      border: ${pxToRem(1)} solid rgba(27, 31, 35, 0.2);
      border-radius: ${pxToRem(4)};
      color: #fff;
      cursor: pointer;
    }

    &-button-add {
      background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
    }

    &-button-remove {
      background-image: linear-gradient(-180deg, #de4450, #cb2431 90%);
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
    max-width: 100%;
    ${media.md`flex: 0 0 70%;`}
    ${media.md`max-width: 70%;`}
  }

  .digest {
    margin: ${pxToRem(20)} 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    overflow-x: hidden;

    &-item {
      padding: 0 ${pxToRem(25)};
      text-align: center;
    }
  }
`;

export { StyledUser };
