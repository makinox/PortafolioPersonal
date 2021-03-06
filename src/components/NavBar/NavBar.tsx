import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { useNavbarQuery } from './Navbar.graph';
import { Bar, BarLogo, DropdownItem, BarDropdown } from './Navbar.styles';
import { AppContext } from '../../context/context';
import { FaMoon, FaSun } from 'react-icons/fa';

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

const RightChild = ({ lang, isDark, HandleIsDark }) => (
  <div className="flex items-center">
    {isDark ? (
      <FaMoon style={{ cursor: 'pointer' }} onClick={HandleIsDark} size={25} />
    ) : (
      <FaSun style={{ cursor: 'pointer' }} onClick={HandleIsDark} size={25} />
    )}
    <BarDropdown
      isDark={isDark}
      Item={
        lang === 'en' ? (
          <div className="flex items-center">
            <BarLogo
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/flag-united-states_1f1fa-1f1f8.png"
              alt="English"
              loading="lazy"
            />

            <span className="bar-lang-span">English</span>
          </div>
        ) : (
          <div className="flex items-center">
            <BarLogo
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
              alt="Español"
              loading="lazy"
            />
            <span className="bar-lang-span">Español</span>
          </div>
        )
      }
      HiddenItems={[
        <DropdownItem key="English" className="flex items-center" onClick={() => navigate('/')}>
          <BarLogo
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/flag-united-states_1f1fa-1f1f8.png"
            alt="English"
            loading="lazy"
          />
          <span>English [en]</span>
        </DropdownItem>,
        <DropdownItem key="Español" className="flex items-center" onClick={() => navigate('/es')}>
          <BarLogo
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
            alt="Español"
            loading="lazy"
          />

          <span>Spanish [es]</span>
        </DropdownItem>,
      ]}
    />
  </div>
);

function NavBar({ messages, lang, isDark }) {
  const { logo } = useNavbarQuery();
  const { HandleIsDark } = useContext(AppContext);
  return (
    <Bar
      isDark={isDark}
      leftChild={<LeftChild title={messages['nav.title']} LogoSource={logo.publicURL} />}
      centerChild={<CenterChild messages={messages} />}
      rightChild={<RightChild lang={lang} HandleIsDark={HandleIsDark} isDark={isDark} />}
    />
  );
}

export default NavBar;
