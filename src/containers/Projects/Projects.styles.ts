import styled from 'styled-components';
import { FadeIn } from '../../animations';

export const ProjectFilter = styled.section`
  margin: 40px 0;

  & > button {
    margin-right: 10px;
    margin-top: 8px;
  }

  & > button:last-of-type {
    margin-right: 0;
  }
`;

export const ProjectCard = styled.article`
  & > div.card-media {
    padding: initial;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > div.card-media div,
  & > div.card-media div img,
  & > div.card-media div picture {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export const ProjectSection = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;

  & > article {
    margin: 8px;
    ${FadeIn({ time: '1s' })}
  }
`;

export const ProjectContainer = styled.section`
  content-visibility: auto;
  contain-intrinsic-size: 0 2732px;
`;
