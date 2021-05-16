import React from 'react';
import { Button } from '@makinox/makinox-ui';
import { NavBar } from '../components';

function IndexPage() {
  return (
    <>
      <NavBar />
      <main>
        <article>
          <h1 className="headline2">Jesús David Bossa</h1>
          <h2 className="headline3">Software architect</h2>
        </article>
        <Button use="contained" message="Say hi" onClick={() => alert('hi')} />
      </main>
    </>
  );
}

export default IndexPage;
