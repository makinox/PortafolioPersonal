import React from 'react';
import { getMessage } from '../../lang/messages';
import { Banner, Anchor, Container, Item, Subtitle, Button, ContactMedia } from './styles';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  return (
    <section id="contact">
      <Container>
        <Item>
          <Subtitle>{getMessage(lang, 'contact.sub')}</Subtitle>
          <Anchor href="mailto:x@jesusbossa.dev">x@jesusbossa.dev</Anchor>
          <ContactMedia>
            <Button aria-label="Github" target="_blank" rel="icon noopener noreferrer" href="https://github.com/makinox">
              <FaGithub />
            </Button>
            <Button aria-label="Twitter" target="_blank" rel="icon noopener noreferrer" href="https://twitter.com/jesMakinox">
              <FaTwitter />
            </Button>
            <Button aria-label="Linkedin" target="_blank" rel="icon noopener noreferrer" href="https://www.linkedin.com/in/makinox/">
              <FaLinkedin />
            </Button>
            <Button aria-label="Instagram" target="_blank" rel="icon noopener noreferrer" href="https://www.instagram.com/jesus.david7">
              <FaInstagram />
            </Button>
          </ContactMedia>
        </Item>
      </Container>
    </section>
  );
};
