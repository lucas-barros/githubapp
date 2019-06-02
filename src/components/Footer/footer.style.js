import styled from 'styled-components';
import { pxToRem, variables} from 'styles';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(variables.footerHeight)};
  background: #211f1f;
  color: #fff;
`;

export { StyledFooter };
