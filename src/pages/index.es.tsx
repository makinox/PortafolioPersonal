import { Description, Footer, Hero, Projects, Studies } from '../containers';
import { NavBar, Seo } from '../components';
import messages from '../lang/messages/es';
import React from 'react';

function IndexPage(props) {
  return (
    <>
      <Seo lang={props.pageContext.langKey} />
      <NavBar messages={messages} lang={props.pageContext.langKey} />
      <main>
        <Hero messages={messages} />
        <Description />
        <Projects />
        <Studies />
        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
