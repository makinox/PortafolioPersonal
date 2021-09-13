import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { navigate } from 'gatsby';

import { DropdownContainer, DropdownHiden, DropdownItem, TopBar, FluidContainer } from '@makinox/makinox-ui';
import { Bar, BarLogo, DropdownItemHidden, BarDropdown } from './Navbar.styles';
import { AppContext } from '../../context/context';
import { useNavbarQuery } from './Navbar.graph';
import { translations } from '../../types';

const LeftChild = ({ LogoSource, title }: { LogoSource: string; title: string }) => (
  <div className="flex items-center">
    <BarLogo src={LogoSource} alt="Portafolio logo" />
    <span>{title}</span>
  </div>
);

const CenterChild = ({ messages }: { messages: translations }) => (
  <div>
    <a href="#about">{messages['nav.about']}</a>
    <a href="#projects">{messages['nav.exp']}</a>
    <a href="#contact">{messages['nav.contact']}</a>
  </div>
);

const RightChild = ({ lang, isDark, HandleIsDark }: { HandleIsDark: VoidFunction; lang: 'es' | 'en'; isDark: boolean }) => {
  const englishElement = (
    <>
      <BarLogo
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/flag-united-states_1f1fa-1f1f8.png"
        alt="English"
        loading="lazy"
      />

      <span className="bar-lang-span">English</span>
    </>
  );
  const spanishElement = (
    <>
      <BarLogo
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
        alt="Español"
        loading="lazy"
      />
      <span className="bar-lang-span">Español</span>
    </>
  );

  return (
    <div className="flex items-center">
      <CgDarkMode style={{ cursor: 'pointer' }} onClick={HandleIsDark} size={25} />

      <BarDropdown className={DropdownContainer({ isDark })}>
        {lang === 'en' ? (
          <div className={`flex items-center ${DropdownItem()}`}>{englishElement}</div>
        ) : (
          <div className={`flex items-center ${DropdownItem()}`}>{spanishElement}</div>
        )}
        <div className={DropdownHiden({ isDark })}>
          {lang === 'en'
            ? [
                <DropdownItemHidden key="Español" className="flex items-center" onClick={() => navigate('/es')}>
                  {spanishElement}
                </DropdownItemHidden>,
                <DropdownItemHidden key="English" className="flex items-center" onClick={() => navigate('/')}>
                  {englishElement}
                </DropdownItemHidden>,
              ]
            : [
                <DropdownItemHidden key="English" className="flex items-center" onClick={() => navigate('/')}>
                  {englishElement}
                </DropdownItemHidden>,
                <DropdownItemHidden key="Español" className="flex items-center" onClick={() => navigate('/es')}>
                  {spanishElement}
                </DropdownItemHidden>,
              ]}
        </div>
      </BarDropdown>
    </div>
  );
};

function NavBar({ messages, lang, isDark }: { messages: translations; lang: 'es' | 'en'; isDark: boolean }) {
  const { logo, logo2 } = useNavbarQuery();
  const { HandleIsDark } = useContext(AppContext);
  return (
    <Bar isDark={isDark} className={TopBar({ isDark })}>
      <section className={`flex justify-between items-center ${FluidContainer()}`}>
        <LeftChild title={messages['nav.title']} LogoSource={isDark ? logo2.publicURL : logo.publicURL} />
        <CenterChild messages={messages} />
        <RightChild lang={lang} HandleIsDark={HandleIsDark} isDark={isDark} />
      </section>
    </Bar>
  );
}

export default NavBar;
