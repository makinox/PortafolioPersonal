import { Button, Float, FluidContainer } from '@makinox/makinox-ui';
import { FooterContactContainer, FooterContainer, FooterSocialContainer } from './Footer.styles';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import React from 'react';

function Footer() {
  return (
    <>
      <FluidContainer className="flex flex-col items-center ">
        <h3 className="headline4">A couple of things I've done</h3>
        <FooterContactContainer>
          <Button use="contained" message="x@jesusbossa.dev" onClick={() => window.open('mailto:x@jesusbossa.dev')} />
        </FooterContactContainer>
        <FooterSocialContainer>
          <Float icon={<FaGithubSquare size={30} aria-label="Github" />} />
          <Float icon={<FaInstagramSquare size={30} aria-label="Instagram" />} />
          <Float icon={<FaLinkedin size={30} aria-label="Linkedin" />} />
          <Float icon={<FaTwitterSquare size={30} aria-label="Twitter" />} />
        </FooterSocialContainer>
      </FluidContainer>
      <FooterContainer>
        <span>Jesús Bossa - {new Date().getFullYear()}</span>
      </FooterContainer>
    </>
  );
}

export default Footer;
