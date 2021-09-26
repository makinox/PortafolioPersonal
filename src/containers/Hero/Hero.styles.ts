import styled from 'styled-components';

export const TitleArticle = styled.article`
  margin-top: 200px;
  margin-bottom: 144px;

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

export const HeroBackground = styled.div`
  position: absolute;
  background-color: rgba(0, 255, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: -1;
`;
