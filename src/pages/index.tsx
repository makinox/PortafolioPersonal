import React from 'react';
import { Button } from '@makinox/makinox-ui';

function IndexPage() {
  return (
    <main>
      <h1>Home Page</h1>
      <Button use="contained" message="Say hi" onClick={() => alert('hi')} />
    </main>
  );
}

export default IndexPage;
