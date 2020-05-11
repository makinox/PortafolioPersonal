import React from 'react';
import { Container, Item, Subtitle, Hr, Parragraph } from './styles';
import { getMessage } from '../../lang/messages';

export default ({ lang }: { lang: 'en' | 'es' }) => (
  <Container id="about">
    <Item>
      <div>
        <Subtitle>{getMessage(lang, 'about.title')}</Subtitle>
        <Hr />
        <Parragraph>{getMessage(lang, 'about.p1')}</Parragraph>
        <Parragraph>{getMessage(lang, 'about.p2')}</Parragraph>
        <Parragraph>{getMessage(lang, 'about.p3')}</Parragraph>
        <Parragraph>{getMessage(lang, 'about.p4')}</Parragraph>
      </div>
    </Item>
  </Container>
);
