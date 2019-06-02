import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'styles';
import { Loading as LoadingImg } from 'img';

const Styled = styled.div`
  width: ${pxToRem(50)};
  margin: ${pxToRem(100)} auto;
`;

const Loading = () => (
  <Styled>
    <img src={LoadingImg} alt="Loading icon" />
  </Styled>
);

export default Loading;
