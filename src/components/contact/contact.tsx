import React from 'react';
import { getMessage } from '../../lang/messages';
import { useStaticQuery, graphql } from 'gatsby';
import { Banner, Anchor, Container, Item, Subtitle, BannerTitle, Button, ContactMedia } from './styles';
import { FaGithub } from 'react-icons/fa';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const data = useStaticQuery(graphql`
    query {
      Ico1: file(relativePath: { eq: "media/instagram.svg" }) {
        publicURL
      }

      Ico2: file(relativePath: { eq: "media/linkedin.svg" }) {
        publicURL
      }

      Ico3: file(relativePath: { eq: "media/twitter.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <section id="contact">
      {/* {console.log(data)} */}
      <Banner>
        <BannerTitle>{getMessage(lang, 'contact.title')}</BannerTitle>
      </Banner>
      <Container>
        <Item>
          <Subtitle>{getMessage(lang, 'contact.sub')}</Subtitle>
          <Anchor href="mailto:x@jesusbossa.dev">x@jesusbossa.dev</Anchor>
          <ContactMedia>
            <Button target="_blank" rel="noopener noreferrer" href="https://github.com/makinox">
              <FaGithub />
            </Button>
            <Button target="_blank" rel="noopener noreferrer" href="https://twitter.com/jesMakinox">
              <img src={data.Ico3.publicURL} alt="Jesus bossa twitter" />
            </Button>
            <Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/makinox/">
              <img src={data.Ico2.publicURL} alt="Jesus bossa linkedin" />
            </Button>
            <Button target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jesus.david7">
              <img src={data.Ico1.publicURL} alt="Jesus bossa instagram" />
            </Button>
          </ContactMedia>
        </Item>
      </Container>
    </section>
  );
};
