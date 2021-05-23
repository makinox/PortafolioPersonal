import { DescriptionCard } from './Description.styles';
import { FluidContainer } from '@makinox/makinox-ui';
import React from 'react';

function Description() {
  return (
    <FluidContainer className="flex justify-center">
      <DescriptionCard
        use="elevated"
        maxWidth="600px"
        children={
          <>
            <div className="card-header">
              <h6 className="headline6">A little bit about me ...</h6>
            </div>
            <div className="card-body">
              <p className="body2">
                I am a guy from Colombia who likes programming very much, usually curious about all that fantastic technology offers.
              </p>
              <p className="body2">
                During the last five years, I have dedicated myself to developing and innovating in technology projects, contributing to their
                development and future.
              </p>
              <p className="body2">
                I work in frontend, backend and devops. I build and design different types of software turning them into incredible products and
                services.
              </p>
              <p className="body2">Let me show you.</p>
            </div>
          </>
        }
      />
    </FluidContainer>
  );
}

export default Description;
