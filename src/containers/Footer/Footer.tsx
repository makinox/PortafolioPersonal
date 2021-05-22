import { Button, Float, FluidContainer } from '@makinox/makinox-ui';
import { FooterContainer, FooterSocialContainer } from './Footer.styles';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import React from 'react';

function Footer() {
  return (
    <>
      <FluidContainer className="flex flex-col items-center ">
        <h3 className="headline4">A couple of things I've done</h3>
        <div>
          <Button use="contained" message="x@jesusbossa.dev" />
        </div>
        <FooterSocialContainer>
          <Float icon={<FaGithubSquare size={30} />} />
          <Float icon={<FaInstagramSquare size={30} />} />
          <Float icon={<FaLinkedin size={30} />} />
          <Float icon={<FaTwitterSquare size={30} />} />
        </FooterSocialContainer>
      </FluidContainer>
      <FooterContainer>
        <span>Jesús Bossa - {new Date().getFullYear()}</span>
      </FooterContainer>
    </>
  );
}

export default Footer;
