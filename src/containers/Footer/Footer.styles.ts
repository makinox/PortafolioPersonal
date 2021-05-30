import styled from 'styled-components';

export const FooterContactContainer = styled.div`
  margin-top: 76px;
`;

export const FooterSocialContainer = styled.div`
  margin: 76px 0;

  & > button {
    margin: 0 10px;
  }
`;

export const FooterContainer = styled.footer<{ isDark?: boolean }>`
  box-shadow: 3px 3px 10px 3px rgb(0 0 0 / 3%);
  margin-top: 48px;
  padding: 25px;

  ${(props) => {
    if (props.theme?.isDark || props.isDark) {
      return `
        background-color: rgb(var(--dark-background));
        color: rgb(var(--dark-onBackground));
      `;
    } else {
      return `
        background-color: rgb(var(--light-background));
        color: rgb(var(--light-onBackground));
      `;
    }
  }}
`;
