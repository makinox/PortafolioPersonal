import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { useNavbarQuery } from './Navbar.graph';
import { Bar, BarLogo, DropdownItem, BarDropdown } from './Navbar.styles';
import { AppContext } from '../../context/context';
import { CgDarkMode } from 'react-icons/cg';

const LeftChild = ({ LogoSource, title }) => (
  <div className="flex items-center">
    <BarLogo src={LogoSource} alt="Portafolio logo" />
    <span>{title}</span>
  </div>
);

const CenterChild = ({ messages }) => (
  <>
    <a href="#about">{messages['nav.about']}</a>
    <a href="#projects">{messages['nav.exp']}</a>
    <a href="#contact">{messages['nav.contact']}</a>
  </>
);

const RightChild = ({ lang, isDark, HandleIsDark }) => {
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

      <BarDropdown
        isDark={isDark}
        Item={lang === 'en' ? <div className="flex items-center">{englishElement}</div> : <div className="flex items-center">{spanishElement}</div>}
        HiddenItems={
          lang === 'en'
            ? [
                <DropdownItem key="Español" className="flex items-center" onClick={() => navigate('/es')}>
                  {spanishElement}
                </DropdownItem>,
                <DropdownItem key="English" className="flex items-center" onClick={() => navigate('/')}>
                  {englishElement}
                </DropdownItem>,
              ]
            : [
                <DropdownItem key="English" className="flex items-center" onClick={() => navigate('/')}>
                  {englishElement}
                </DropdownItem>,
                <DropdownItem key="Español" className="flex items-center" onClick={() => navigate('/es')}>
                  {spanishElement}
                </DropdownItem>,
              ]
        }
      />
    </div>
  );
};

function NavBar({ messages, lang, isDark }) {
  const { logo, logo2 } = useNavbarQuery();
  const { HandleIsDark } = useContext(AppContext);
  return (
    <Bar
      isDark={isDark}
      leftChild={<LeftChild title={messages['nav.title']} LogoSource={isDark ? logo2.publicURL : logo.publicURL} />}
      centerChild={<CenterChild messages={messages} />}
      rightChild={<RightChild lang={lang} HandleIsDark={HandleIsDark} isDark={isDark} />}
    />
  );
}

export default NavBar;
