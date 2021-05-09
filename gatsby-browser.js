const React = require('react');

require('./src/layout/colors.css');
require('@makinox/makinox-ui/dist/index.css');

const { GlobalStyles } = require('./src/components/');

exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
