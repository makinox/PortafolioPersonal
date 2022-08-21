import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { ButtonText, Card, FluidContainer } from '@makinox/makinox-ui';

import { PeopleBody, PeopleHeader } from './People.styles';
import { usePeopleQuery } from './People.graph';
import { translations } from '../../types';
import PeopleData from './People.mock';

export default function People({ messages, isDark }: { messages: translations; isDark: boolean }) {
  const imageList = usePeopleQuery();

  return (
    <section className={FluidContainer()}>
      <PeopleHeader className="flex flex-col items-center">
        <h3 className="headline4 text-center">{messages['people.title']}</h3>
      </PeopleHeader>
      <PeopleBody className="flex flex-col">
        {PeopleData.map((person) => (
          <article
            key={person.name}
            className={`${Card({ type: 'outlined', css: { width: '100%', maxWidth: 'max-content', height: 'min-content' }, isDark })} text-center`}
          >
            <div className="card-media">
              <GatsbyImage image={getImage(imageList[person.img]) as IGatsbyImageData} alt={person.name} />
            </div>
            <div className="card-header" id="about">
              <h6 className="headline6">{person.name}</h6>
              <span className="subtitle1">{person.place}</span>
            </div>
            <div className="card-body">
              <span>{person.text}</span>
            </div>
            <div className="card-bottom">
              <button className={ButtonText({ isDark })} onClick={() => window.open('https://www.linkedin.com/in/makinox/', '_blank')}>
                {messages['people.cta']}
              </button>
            </div>
          </article>
        ))}
      </PeopleBody>
    </section>
  );
}
