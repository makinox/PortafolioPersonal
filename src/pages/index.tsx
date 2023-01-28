import React, { useContext } from 'react';

import { Description, Footer, Hero, Projects, Work, Skills } from '../containers';
import People from '../containers/People/People';
import { AppContext } from '../context/context';
import { NavBar, Seo } from '../components';
import messages from '../lang/messages/en';

function IndexPage(props) {
  const { isDark } = useContext(AppContext);

  return (
    <>
      <Seo lang={props.pageContext.langKey} />
      <NavBar messages={messages} lang={props.pageContext.langKey} isDark={isDark} />
      <main>
        <Hero messages={messages} />
        <Description messages={messages} isDark={isDark} />
        <Work messages={messages} isDark={isDark} />
        <Projects messages={messages} isDark={isDark} />
        <Skills messages={messages} isDark={isDark} />
        <People messages={messages} isDark={isDark} />
        <Footer messages={messages} isDark={isDark} />
      </main>
    </>
  );
}

export default IndexPage;
