import React from 'react';
import { NavBar } from '../components';
import { Button } from '@makinox/makinox-ui';
import { Description, Hero } from '../containers';

function IndexPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Description />
      </main>
    </>
  );
}

export default IndexPage;
