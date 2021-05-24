import { Description, Footer, Hero, Projects, Studies } from '../containers';
import { NavBar, Seo } from '../components';
import messages from '../lang/messages/es';
import React from 'react';

function IndexPage(props) {
  return (
    <>
      {console.log({ props, messages })}
      <Seo lang={props.pageContext.langKey} />
      <NavBar messages={messages} />
      <main>
        <Hero />
        <Description />
        <Projects />
        <Studies />
        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
