import styled from 'styled-components';
import { Box } from '@rebass/grid';

const Container = styled(Box)`
  max-width: 1024px;
  padding: 0 15px;
`;
Container.defaultProps = {
  mx: 'auto'
};

export default Container;
