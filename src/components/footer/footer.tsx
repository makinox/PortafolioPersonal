import React from 'react';
import { Footer, Anchor, Title } from './style';

export default () => (
  <Footer>
    <Title>
      {new Date().getFullYear()} -{' '}
      <Anchor href="https://twitter.com/jesMakinox" target="_blank" rel="noopener noreferrer">
        Jesús Bossa
      </Anchor>
    </Title>
  </Footer>
);
