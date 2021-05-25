import { FluidContainer } from '@makinox/makinox-ui';
import { TitleArticle } from './Hero.styles';
import React from 'react';

function Hero({ messages }) {
  return (
    <FluidContainer className="flex justify-center">
      <TitleArticle className="text-center">
        <h1 className="headline1">Jesús David Bossa</h1>
        <h2 className="headline3">{messages['hero.sub']}</h2>
      </TitleArticle>
    </FluidContainer>
  );
}

export default Hero;
