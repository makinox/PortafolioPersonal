import React from 'react';
import { ButtonText, Card, FluidContainer } from '@makinox/makinox-ui';

import { PeopleBody, PeopleHeader } from './People.styles';
import { translations } from '../../types';
import PeopleData from './People.mock';

export default function People({ messages, isDark }: { messages: translations; isDark: boolean }) {
  return (
    <section className={FluidContainer()}>
      <PeopleHeader className="flex flex-col items-center">
        <h3 className="headline4">{messages['people.title']}</h3>
      </PeopleHeader>
      <PeopleBody className="flex flex-wrap justify-center">
        {PeopleData.map((person) => (
          <article
            key={person.name}
            className={`${Card({ type: 'outlined', css: { minWidth: '380px', height: 'min-content' }, isDark })} text-center`}
          >
            <div className="card-media">
              <img src={person.img} alt={person.name} />
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
