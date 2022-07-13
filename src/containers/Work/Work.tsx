import React from 'react';
import { Card } from '@makinox/makinox-ui';

import { WorkBody, WorkHeader } from './Work.styles';
import works from './Work.mock';
import { translations } from '../../types';

export default function Work({ messages, isDark }: { messages: translations; isDark: boolean }) {
  return (
    <section>
      <WorkHeader className="flex flex-col items-center">
        <h3 className="headline4">{messages['work.title']}</h3>
      </WorkHeader>
      <WorkBody className="flex flex-wrap justify-center">
        {works.map((workDetail) => (
          <article key={workDetail.place} className={`${Card({ type: 'outlined', css: { minWidth: '380px' }, isDark })} text-center`}>
            <div className="card-media">
              <img src={workDetail.urlImage} alt={workDetail.place} />
            </div>
            <div className="card-header" id="about">
              <h6 className="headline6">{workDetail.place}</h6>
              <span className="subtitle1">{messages[workDetail.job]}</span>
            </div>
            <div className="card-body">{messages[workDetail.timeCount]}</div>
          </article>
        ))}
      </WorkBody>
    </section>
  );
}
