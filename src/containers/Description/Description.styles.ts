import { Card, FluidContainer } from '@makinox/makinox-ui';
import styled from 'styled-components';

export const DescriptionCard = styled(Card)`
  margin-bottom: 80px;

  & .body2 {
    margin-bottom: 5px;
  }
`;

export const DescriptionContainer = styled(FluidContainer)`
  content-visibility: auto;
  contain-intrinsic-size: 0 294px;
`;
