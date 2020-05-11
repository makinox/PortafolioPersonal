import React from 'react';
import { Container, Item, Title, Subtitle } from './styles';
import { getMessage } from '../../lang/messages';

export default ({ lang }: { lang: 'en' | 'es' }) => (
  <Container>
    <Item>
      <div>
        <Title>Jesús David Bossa</Title>
        <Subtitle>{getMessage(lang, 'hero.sub')}</Subtitle>
      </div>
    </Item>
  </Container>
);
