import styled from 'styled-components';
import { pxToRem, variables } from 'styles';

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(variables.navHeight)};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  background: #24292e;
  padding: 0 ${pxToRem(20)};

  .nav-brand {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .nav-link {
    color: #fff;
    margin-right: ${pxToRem(20)};
  }
`;

export { StyledNav };
