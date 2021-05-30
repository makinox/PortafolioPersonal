const React = require('react');
const { AppProvider, AppContext } = require('./src/context/context');

require('./src/layout/colors.css');
require('@makinox/makinox-ui/dist/index.css');

const { GlobalStyles } = require('./src/components/');

function RootElement() {
  const { isDark } = React.useContext(AppContext);

  return <GlobalStyles isDark={isDark} />;
}

exports.wrapRootElement = ({ element }) => (
  <AppProvider>
    <RootElement />
    {element}
  </AppProvider>
);
