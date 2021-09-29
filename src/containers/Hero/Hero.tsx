import React, { useContext, useRef } from 'react';

import { HeroContainer, TitleArticle } from './Hero.styles';
import { AppContext } from '../../context/context';
import { translations } from '../../types';
import HeroLight from './Hero.light';
import HeroDark from './Hero.dark';

function Hero({ messages }: { messages: translations }) {
  const { isDark } = useContext(AppContext);
  const heroRef = useRef<HTMLDivElement>();

  return (
    <HeroContainer ref={heroRef} className="flex justify-center">
      <TitleArticle className="text-center">
        <h1 className="headline1">Jesús David Bossa</h1>
        <h2 className="headline3">{messages['hero.sub']}</h2>
      </TitleArticle>
      {isDark ? <HeroDark heroRef={heroRef} /> : <HeroLight heroRef={heroRef} />}
    </HeroContainer>
  );
}

export default Hero;
