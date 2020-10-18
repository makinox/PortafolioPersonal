import React from 'react';
import { getMessage } from '../../lang/messages';
import { FluidContainer } from '../';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, LogoDiv, Anchor, Image, Select, Header, SectDiv } from './styles';

export default ({ lang, change }: { lang: 'en' | 'es'; change: any }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <Header>
      <FluidContainer>
        <Nav>
          <LogoDiv>
            <Anchor href="#a">
              <Image src={data.placeholderImage.publicURL} alt="Logo de jesús bossa" />
            </Anchor>
          </LogoDiv>
          <SectDiv>
            <Anchor href="#about">{getMessage(lang, 'nav.about')}</Anchor>
          </SectDiv>
          <SectDiv>
            <Anchor href="#experience">{getMessage(lang, 'nav.exp')}</Anchor>
          </SectDiv>
          <SectDiv>
            <Anchor href="#studies">{getMessage(lang, 'nav.edu')}</Anchor>
          </SectDiv>
          <SectDiv>
            <Anchor href="#contact">{getMessage(lang, 'nav.contact')}</Anchor>
          </SectDiv>
          <div>
            <Select onChange={change} name="lang" aria-label="lang-changer">
              <option value="en" defaultValue="true">
                EN
              </option>
              <option value="es">ES</option>
            </Select>
          </div>
        </Nav>
      </FluidContainer>
    </Header>
  );
};
