import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400|Open+Sans:300,400&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(var(--light-surface));
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans';
  }
`;
