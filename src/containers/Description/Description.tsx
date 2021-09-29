import React from 'react';
import { Card, FluidContainer } from '@makinox/makinox-ui';

import { DescriptionCard, DescriptionContainer } from './Description.styles';
import { translations } from '../../types';

function Description({ messages, isDark }: { messages: translations; isDark: boolean }) {
  return (
    <DescriptionContainer className="flex justify-center">
      <DescriptionCard
        className={Card({
          isDark,
          type: 'elevated',
          css: {
            maxWidth: '600px',
          },
        })}
      >
        <div className="card-header" id="about">
          <h6 className="headline6">{messages['about.title']}</h6>
        </div>
        <div className="card-body">
          <p className="body2">{messages['about.p1']}</p>
          <p className="body2">{messages['about.p2']}</p>
          <p className="body2">{messages['about.p3']}</p>
          <p className="body2">{messages['about.p4']}</p>
        </div>
      </DescriptionCard>
    </DescriptionContainer>
  );
}

export default Description;
