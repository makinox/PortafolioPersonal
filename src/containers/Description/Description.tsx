import { Card, FluidContainer } from '@makinox/makinox-ui';
import React from 'react';

function Description() {
  return (
    <FluidContainer className="flex justify-center">
      <Card
        use="elevated"
        title="A little bit about me ..."
        maxWidth="600px"
        text="I am a guy from Colombia who likes programming very much, usually curious about all that fantastic technology offers.

During the last two years, I have dedicated myself to developing and innovating in technology projects, contributing to their development and future.

I work in frontend, backend and devop. I build and design different types of software turning them into incredible products and services.

Let me show you."
      />
    </FluidContainer>
  );
}

export default Description;
