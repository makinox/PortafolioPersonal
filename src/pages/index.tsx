import React from 'react';
import { NavBar } from '../components';
import { Description, Footer, Hero, Projects, Studies } from '../containers';

function IndexPage() {
  return (
    <>
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
