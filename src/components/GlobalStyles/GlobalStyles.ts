import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{ isDark?: boolean }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${(props) => {
      if (props.isDark) {
        return `
        background-color: rgb(var(--dark-surface));
        color: rgb(var(--dark-onSurface)) !important;
      `;
      } else {
        return `
        background-color: rgb(var(--light-surface));
        color: rgb(var(--light-onSurface)) !important;
      `;
      }
    }}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans';
  }
`;
