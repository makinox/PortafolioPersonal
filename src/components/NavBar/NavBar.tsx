import React from 'react';
import { useNavbarQuery } from './Navbar.graph';
import { Dropdown } from '@makinox/makinox-ui';
import { Bar, BarLogo, DropdownItem } from './Navbar.styles';

const LeftChild = ({ LogoSource }) => (
  <div className="flex items-center">
    <BarLogo src={LogoSource} alt="Portafolio logo" />
    <span>Portfolio</span>
  </div>
);

const CenterChild = (
  <>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#studies">Education</a>
    <a href="#contact">Contact</a>
  </>
);
const RightChild = (
  <Dropdown
    Item={
      <BarLogo
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
        alt="Español"
        loading="lazy"
      />
    }
    HiddenItems={[
      <DropdownItem className="flex items-center">
        <BarLogo
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/flag-colombia_1f1e8-1f1f4.png"
          alt="Español"
          loading="lazy"
        />
        <span>English [en]</span>
      </DropdownItem>,
      <DropdownItem className="flex items-center">
        <BarLogo
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/flag-united-states_1f1fa-1f1f8.png"
          alt="English"
          loading="lazy"
        />
        <span>Spanish [es]</span>
      </DropdownItem>,
    ]}
  />
);

function NavBar() {
  const { logo } = useNavbarQuery();

  return <Bar leftChild={<LeftChild LogoSource={logo.publicURL} />} centerChild={CenterChild} rightChild={RightChild} />;
}

export default NavBar;
