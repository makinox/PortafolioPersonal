import React from 'react';
import works from './Work.mock';
import { Card } from '@makinox/makinox-ui';

export default function Work() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h3 className="headline4">Mi experiencia hasta ahora</h3>
        <span>6 años</span>
      </div>
      <div className="flex flex-col items-center">
        {works.map((workDetail) => (
          <article className={`${Card({ type: 'outlined', css: { minWidth: '380px' } })} text-center`}>
            <div className="card-header" id="about">
              <h6 className="headline6">{workDetail.place}</h6>
              <span className="subtitle1">{workDetail.job}</span>
            </div>
            <div>
              {workDetail.initDate} - {workDetail.finishDate}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
