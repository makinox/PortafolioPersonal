import React from 'react';
import { NavBar } from '../components';
import { Description, Hero, Projects, Studies } from '../containers';

function IndexPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Description />
        <Projects />
        <Studies />
      </main>
    </>
  );
}

export default IndexPage;
