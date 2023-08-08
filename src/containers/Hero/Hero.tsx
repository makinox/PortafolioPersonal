import React, { useContext, useRef } from 'react';

import { HeroContainer, TitleArticle } from './Hero.styles';
import { AppContext } from '../../context/context';
import { translations } from '../../types';

function Hero({ messages }: { messages: translations }) {
  const { isDark } = useContext(AppContext);

  return (
    <HeroContainer isDark={isDark} className="flex justify-center">
      <TitleArticle isDark={isDark} className="text-center">
        <h1 className="headline1">Jesús David Bossa</h1>
        <h2 className="headline3">{messages['hero.sub']}</h2>
      </TitleArticle>
    </HeroContainer>
  );
}

export default Hero;
