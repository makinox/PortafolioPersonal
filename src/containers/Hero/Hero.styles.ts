import styled from 'styled-components';

export const TitleArticle = styled.article`
  margin-top: 270px;
  margin-bottom: 220px;

  @media (max-width: 472px) {
    margin-top: 72px;
    margin-bottom: 80px;
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  content-visibility: auto;
  contain-intrinsic-size: 0 540px;
`;
