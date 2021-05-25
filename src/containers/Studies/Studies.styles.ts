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

export const StudiesContainer = styled.div`
  margin-top: 76px;
  margin-bottom: 36px;
  min-height: 170px;

  @media (max-width: 765px) {
    & > img:last-of-type {
      display: none;
    }
  }

  @media (max-width: 496px) {
    min-height: 340px;
  }

  @media (max-width: 336px) {
    & > img:nth-child(3) {
      display: none;
    }
  }
`;

export const CertCointainer = styled.div`
  margin: 56px 0;
`;
