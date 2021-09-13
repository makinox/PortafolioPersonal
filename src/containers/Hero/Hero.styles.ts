// import { FluidContainer } from '@makinox/makinox-ui';
import styled from 'styled-components';

export const TitleArticle = styled.article`
  margin-top: 200px;
  margin-bottom: 144px;

  @media (max-width: 472px) {
    margin-top: 72px;
    margin-bottom: 80px;
  }
`;

// export const HeroContainer = styled(FluidContainer)`
export const HeroContainer = styled.section`
  content-visibility: auto;
  contain-intrinsic-size: 0 540px;
`;
