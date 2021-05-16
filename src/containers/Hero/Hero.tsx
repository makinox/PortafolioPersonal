import { FluidContainer } from '@makinox/makinox-ui';
import { TitleArticle } from './Hero.styles';
import React from 'react';

const Titles = () => (
  <TitleArticle>
    <h1 className="headline2">Jesús David Bossa</h1>
    <h2 className="headline3">Software architect</h2>
  </TitleArticle>
);

function Hero() {
  return (
    <FluidContainer className="flex justify-center">
      <Titles />
    </FluidContainer>
  );
}

export default Hero;
