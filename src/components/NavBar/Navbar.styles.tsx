import styled from 'styled-components';
import { TopBar } from '@makinox/makinox-ui';

export const Bar = styled(TopBar)`
  & > div > div:nth-child(2) {
    span {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
