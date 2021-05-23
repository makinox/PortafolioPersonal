import { Card } from '@makinox/makinox-ui';
import styled from 'styled-components';
import { FadeIn } from '../../animations';

export const ProjectFilter = styled.section`
  margin: 48px 0;

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
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > div.card-customMedia div {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const ProjectSection = styled.section`
  margin: 10px 0;

  & > article {
    margin: 8px;
    ${FadeIn({ time: '1s' })}
  }
`;
