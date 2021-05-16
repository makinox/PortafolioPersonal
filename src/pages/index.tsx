import React from 'react';
import { NavBar } from '../components';
import { Description, Hero, Projects } from '../containers';

function IndexPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Description />
        <Projects />
      </main>
    </>
  );
}

export default IndexPage;
