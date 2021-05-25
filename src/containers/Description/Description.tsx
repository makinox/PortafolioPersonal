import { DescriptionCard, DescriptionContainer } from './Description.styles';
import React from 'react';

function Description({ messages }) {
  return (
    <DescriptionContainer className="flex justify-center">
      <DescriptionCard
        use="elevated"
        maxWidth="600px"
        children={
          <>
            <div className="card-header" id="about">
              <h6 className="headline6">{messages['about.title']}</h6>
            </div>
            <div className="card-body">
              <p className="body2">{messages['about.p1']}</p>
              <p className="body2">{messages['about.p2']}</p>
              <p className="body2">{messages['about.p3']}</p>
              <p className="body2">{messages['about.p4']}</p>
            </div>
          </>
        }
      />
    </DescriptionContainer>
  );
}

export default Description;
