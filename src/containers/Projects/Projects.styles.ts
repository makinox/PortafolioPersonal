import { Card } from '@makinox/makinox-ui';
import styled from 'styled-components';
import { FadeIn } from '../../animations';

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

export const ProjectSection = styled.section`
  margin: 10px 0;

  & > article {
    margin: 8px;
    ${FadeIn({ time: '1s' })}
  }
`;
