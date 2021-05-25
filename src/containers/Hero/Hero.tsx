import { HeroContainer, TitleArticle } from './Hero.styles';
import React from 'react';

function Hero({ messages }) {
  return (
    <HeroContainer className="flex justify-center">
      <TitleArticle className="text-center">
        <h1 className="headline1">Jesús David Bossa</h1>
        <h2 className="headline3">{messages['hero.sub']}</h2>
      </TitleArticle>
    </HeroContainer>
  );
}

export default Hero;
