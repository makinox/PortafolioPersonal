import styled from 'styled-components';
import { Rotate } from '../../animations';

export const StudiesImage = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px 5px;
  ${Rotate()}

  &:hover {
    transform: scale(1.1);
  }
`;
