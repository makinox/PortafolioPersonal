import React from 'react';
import { getMessage } from '../../lang/messages';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, LogoDiv, Anchor, Image, Select } from './styles';

export const Navbar = ({ lang, change }: { lang: 'en' | 'es'; change: any }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <header>
      <Nav>
        <LogoDiv>
          <Anchor href="#a">
            <Image src={data.placeholderImage.publicURL} alt="Logo de jesús bossa" />
          </Anchor>
        </LogoDiv>
        <div>
          <Anchor href="#about">{getMessage(lang, 'nav.about')}</Anchor>
        </div>
        <div>
          <Anchor href="#experience">{getMessage(lang, 'nav.exp')}</Anchor>
        </div>
        <div>
          <Anchor href="#studies">{getMessage(lang, 'nav.edu')}</Anchor>
        </div>
        <div>
          <Anchor href="#contact">{getMessage(lang, 'nav.contact')}</Anchor>
        </div>
        <div>
          <Select onChange={change} name="lang" aria-label="lang-changer">
            <option value="en" defaultValue="true">
              EN
            </option>
            <option value="es">ES</option>
          </Select>
        </div>
      </Nav>
    </header>
  );
};
