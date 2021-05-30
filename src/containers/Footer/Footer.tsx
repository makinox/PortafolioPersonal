import { Button, Float, FluidContainer } from '@makinox/makinox-ui';
import { FooterContactContainer, FooterContainer, FooterSocialContainer } from './Footer.styles';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import React from 'react';

function Footer({ messages, isDark }) {
  return (
    <>
      <FluidContainer className="flex flex-col items-center" id="contact">
        <h3 className="headline4 text-center">{messages['contact.sub']}</h3>
        <FooterContactContainer>
          <Button isDark={isDark} use="contained" message="x@jesusbossa.dev" onClick={() => window.open('mailto:x@jesusbossa.dev')} />
        </FooterContactContainer>
        <FooterSocialContainer>
          <Float
            isDark={isDark}
            onClick={() => window.open('https://github.com/makinox', '_blank')}
            icon={<FaGithubSquare size={30} aria-label="Github" />}
          />
          <Float
            isDark={isDark}
            onClick={() => window.open('https://www.instagram.com/jesus.david7', '_blank')}
            icon={<FaInstagramSquare size={30} aria-label="Instagram" />}
          />
          <Float
            isDark={isDark}
            onClick={() => window.open('https://www.linkedin.com/in/makinox/', '_blank')}
            icon={<FaLinkedin size={30} aria-label="Linkedin" />}
          />
          <Float
            isDark={isDark}
            onClick={() => window.open('https://twitter.com/jesMakinox', '_blank')}
            icon={<FaTwitterSquare size={30} aria-label="Twitter" />}
          />
        </FooterSocialContainer>
      </FluidContainer>
      <FooterContainer isDark={isDark}>
        <span>Jesús Bossa - {new Date().getFullYear()}</span>
      </FooterContainer>
    </>
  );
}

export default Footer;
