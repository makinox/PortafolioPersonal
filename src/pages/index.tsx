import { Description, Footer, Hero, Projects, Studies } from '../containers';
import { NavBar, Seo } from '../components';
import messages from '../lang/messages/en';
import React from 'react';

function IndexPage(props) {
  return (
    <>
      <Seo lang={props.pageContext.langKey} />
      <NavBar messages={messages} lang={props.pageContext.langKey} />
      <main>
        <Hero messages={messages} />
        <Description messages={messages} />
        <Projects messages={messages} />
        <Studies messages={messages} />
        <Footer messages={messages} />
      </main>
    </>
  );
}

export default IndexPage;
