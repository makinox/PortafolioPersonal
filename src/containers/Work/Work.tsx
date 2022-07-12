import React from 'react';
import { Card } from '@makinox/makinox-ui';
import { FaAngleDoubleDown } from 'react-icons/fa';

import { WorkBody, WorkHeader } from './Work.styles';
import works from './Work.mock';

export default function Work() {
  return (
    <section>
      <WorkHeader className="flex flex-col items-center">
        <h3 className="headline4">Mi experiencia hasta ahora</h3>
        <span className="subtitle1">6 años</span>
      </WorkHeader>
      <WorkBody className="flex flex-col items-center">
        {works.map((workDetail, idx) => (
          <>
            <article className={`${Card({ type: 'outlined', css: { minWidth: '380px' } })} text-center`}>
              <div className="card-header" id="about">
                <h6 className="headline6">{workDetail.place}</h6>
                <span className="subtitle1">{workDetail.job}</span>
              </div>
              <div>
                {workDetail.initDate} - {workDetail.finishDate}
              </div>
            </article>
            {works.length !== idx + 1 && <FaAngleDoubleDown />}
          </>
        ))}
      </WorkBody>
    </section>
  );
}
