import { Card } from '@makinox/makinox-ui';
import styled from 'styled-components';

export const ProjectFilter = styled.section`
  & > button {
    margin-right: 10px;
  }

  & > button:last-of-type {
    margin-right: 0;
  }
`;

export const ProjectCard = styled(Card)`
  & > div.card-customMedia {
    padding: initial;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`;
