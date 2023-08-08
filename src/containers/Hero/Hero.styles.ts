import styled from 'styled-components';

export const TitleArticle = styled.article<{ isDark: boolean }>`
  margin-top: 270px;
  margin-bottom: 220px;

  @media (max-width: 472px) {
    margin-top: 72px;
    margin-bottom: 80px;
  }

  & h1,
  h2 {
    font-weight: 800;
    letter-spacing: 2px;
  }

  & h1 {
    background-color: rgb(89, 151, 250);
    background-image: linear-gradient(294deg, rgb(219, 0, 242), rgb(89, 151, 250));

    ${(props) => {
      if (props.theme?.isDark || props.isDark) {
        return `
        background-color: #bccc00;
        background-image: linear-gradient(294deg, #55cc00, #bccc00);
      `;
      } else {
        return `
        background-color: rgb(89, 151, 250);
        background-image: linear-gradient(294deg, rgb(219, 0, 242), rgb(89, 151, 250));
      `;
      }
    }}

    background-size: 100%;
    background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;

export const HeroContainer = styled.section<{ isDark: boolean }>`
  position: relative;
  content-visibility: auto;
  contain-intrinsic-size: 0 540px;

  ${(props) => {
    if (props.theme?.isDark || props.isDark) {
      return `
      background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(245, 245, 246,0.40) 0%, rgba(0,0,0,0.25) 200%);
      background-blend-mode: multiply;
      `;
    } else {
      return `
      background-image: linear-gradient(to top, rgb(245, 245, 246) 0%, #dfe9f3 100%);
      `;
    }
  }}
`;
