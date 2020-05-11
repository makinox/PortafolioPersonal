/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// const React = require("react");
// const Layout = require("./src/components/layout").default;
// const { GlobalStyles } = require("./src/styles");
// const { Provider } = require("./src/context");

// exports.wrapRootElement = ({ element }) => (
//   <Provider>
//     <GlobalStyles />
//     <Layout>{element}</Layout>
//   </Provider>
// );
const React = require('react');
const { GlobalStyles } = require('./src/components/globalStyles/GlobalStyles');

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
