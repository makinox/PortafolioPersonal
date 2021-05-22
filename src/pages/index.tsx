import React from 'react';
import { NavBar, Seo } from '../components';
import { Description, Footer, Hero, Projects, Studies } from '../containers';

function IndexPage() {
  return (
    <>
      <Seo />
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
