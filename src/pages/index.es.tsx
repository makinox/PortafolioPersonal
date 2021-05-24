import { Description, Footer, Hero, Projects, Studies } from '../containers';
import { NavBar, Seo } from '../components';
import i18n from '../lang/messages/es';
import React from 'react';

function IndexPage(props) {
  return (
    <>
      {console.log({ props, i18n })}
      <Seo lang={props.pageContext.langKey} />
      <NavBar />
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
