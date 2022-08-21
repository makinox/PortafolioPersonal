import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Card, FluidContainer, Badge } from '@makinox/makinox-ui';

import { WorkBody, WorkHeader } from './Work.styles';
import { translations } from '../../types';
import { useWorkQuery } from './Work.graph';
import worksData from './Work.mock';

export default function Work({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const imageList = useWorkQuery();

  return (
    <section className={FluidContainer()}>
      <WorkHeader className="flex flex-col items-center">
        <h3 className="headline4 text-center">{messages['work.title']}</h3>
      </WorkHeader>
      <WorkBody className="flex flex-wrap justify-center">
        {worksData
          .map((workDetail, index) => (
            <article key={workDetail.place} className={`${Card({ type: 'outlined', css: { minWidth: '380px' }, isDark })} text-center`}>
              <div className="card-media">
                <GatsbyImage image={getImage(imageList[workDetail.img]) as IGatsbyImageData} alt={`Jesus bossa - ${workDetail.place}`} />
                <div className={`work-badge ${Badge({ isDark })}`}>{index + 1}</div>
              </div>
              <div className="card-header" id="about">
                <h6 className="headline6">{workDetail.place}</h6>
                <span className="subtitle1">{messages[workDetail.job]}</span>
              </div>
              <div className="card-body">{messages[workDetail.timeCount]}</div>
            </article>
          ))
          .reverse()}
      </WorkBody>
    </section>
  );
}
