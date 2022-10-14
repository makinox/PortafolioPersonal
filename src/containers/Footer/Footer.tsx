import React from 'react';
import { ButtonContained, Float, FluidContainer } from '@makinox/makinox-ui';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import { FooterContactContainer, FooterContainer, FooterSocialContainer } from './Footer.styles';
import { translations } from '../../types';

function Footer({ messages, isDark }: { messages: translations; isDark: boolean }) {
  return (
    <>
      <section className={`flex flex-col items-center ${FluidContainer()}`} id="contact">
        <h3 className="headline4 text-center">{messages['contact.sub']}</h3>
        <FooterContactContainer className="flex justify-center flex-wrap">
          <button className={ButtonContained({ isDark })} onClick={() => window.open('mailto:x@jesusbossa.dev')}>
            Email me
          </button>
          <button
            className={ButtonContained({ isDark })}
            onClick={() => window.open('https://docs.google.com/document/d/1OGHl-zTllmxzfH1SG7ZDS0K1y20iFMxi_KfkyzZfIhI/edit?usp=sharing')}
          >
            get my resume
          </button>
          <button
            className={ButtonContained({ isDark })}
            onClick={() => window.open('https://docs.google.com/document/d/1iNSFmj9ojlC4Jq5I-Lq1IOOmLxclbI6u5cEhmPNMgd4/edit?usp=sharing')}
          >
            get my curriculum
          </button>
        </FooterContactContainer>
        <FooterSocialContainer className="flex justify-center flex-wrap">
          <button className={Float({ isDark })} onClick={() => window.open('https://github.com/makinox', '_blank')}>
            <FaGithubSquare size={30} aria-label="Github" />
          </button>
          <button className={Float({ isDark })} onClick={() => window.open('https://www.instagram.com/makinoxz', '_blank')}>
            <FaInstagramSquare size={30} aria-label="Instagram" />
          </button>
          <button className={Float({ isDark })} onClick={() => window.open('https://www.linkedin.com/in/makinox/', '_blank')}>
            <FaLinkedin size={30} aria-label="Linkedin" />
          </button>
          <button className={Float({ isDark })} onClick={() => window.open('https://twitter.com/jesMakinox', '_blank')}>
            <FaTwitterSquare size={30} aria-label="Twitter" />
          </button>
        </FooterSocialContainer>
      </section>
      <FooterContainer isDark={isDark}>
        <span>Jesús Bossa - {new Date().getFullYear()}</span>
      </FooterContainer>
    </>
  );
}

export default Footer;
