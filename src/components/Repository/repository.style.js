import styled from 'styled-components';
import { pxToRem, media } from 'styles';

const StyledRepository = styled.div`
  display: flex;
  ${media.xs`flex-direction: column;`}
  ${media.md`flex-direction: row;`}

  .owner {
    display: flex;
    flex-direction: column;
    padding: 0 ${pxToRem(20)};
    margin-right: ${pxToRem(0)};
    ${media.md` margin-right: ${pxToRem(20)}`};

    flex: 0 0 100%;
    ${media.md`flex: 0 0 30%;`}

    &-name {
      font-weight: bold;
      font-size: ${pxToRem(24)};
    }

    &-avatar {
      height: auto;
      width: 100%;
      box-shadow: 0 1px 2px rgba(0,0,0,.22), 0 1px 2px rgba(0,0,0,.22);
      border ${pxToRem(1)} solid #999;
      margin-bottom: ${pxToRem(15)} 
    }
  }
  .repositories {
    flex: 0 0 100%;
    ${media.md`flex: 0 0 70%;`}
  }
`;

export { StyledRepository };
