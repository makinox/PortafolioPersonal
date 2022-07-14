import { Description, Footer, Hero, Projects, Studies, Work } from '../containers';
import { AppContext } from '../context/context';
import { NavBar, Seo } from '../components';
import messages from '../lang/messages/es';
import React, { useContext } from 'react';

function IndexPage(props) {
  const { isDark } = useContext(AppContext);

  return (
    <>
      <Seo lang={props.pageContext.langKey} />
      <NavBar messages={messages} lang={props.pageContext.langKey} isDark={isDark} />
      <main>
        <Hero messages={messages} />
        <Description messages={messages} isDark={isDark} />
        <Projects messages={messages} isDark={isDark} />
        <Work messages={messages} isDark={isDark} />
        <Studies messages={messages} isDark={isDark} />
        <Footer messages={messages} isDark={isDark} />
      </main>
    </>
  );
}

export default IndexPage;
