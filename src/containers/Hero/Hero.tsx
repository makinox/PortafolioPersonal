import React from 'react';
import { FluidContainer } from '@makinox/makinox-ui';

import { HeroContainer, TitleArticle, HeroBackground } from './Hero.styles';
import { translations } from '../../types';
import HeroThree from './Hero.three';

function Hero({ messages }: { messages: translations }) {
  const { refElement } = HeroThree();

  return (
    <HeroContainer className={`flex justify-center ${FluidContainer()}`}>
      <TitleArticle className="text-center">
        <h1 className="headline1">Jesús David Bossa</h1>
        <h2 className="headline3">{messages['hero.sub']}</h2>
      </TitleArticle>
      <HeroBackground ref={refElement} />
    </HeroContainer>
  );
}

export default Hero;
