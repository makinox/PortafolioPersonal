import styled from 'styled-components';
import { TopBar } from '@makinox/makinox-ui';

export const Bar = styled(TopBar)`
  & > div > div:nth-child(2) {
    a {
      color: #000;
      text-decoration: none;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

export const BarLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
