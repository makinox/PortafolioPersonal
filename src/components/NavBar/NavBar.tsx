import React from 'react';
import { useNavbarQuery } from './Navbar.graph';
import { Bar, BarLogo } from './Navbar.styles';

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
  <select name="Languaje">
    <option value="English">English</option>
    <option value="Espanol">Espanol</option>
  </select>
);

function NavBar() {
  const { logo } = useNavbarQuery();

  return <Bar leftChild={<LeftChild LogoSource={logo.publicURL} />} centerChild={CenterChild} rightChild={RightChild} />;
}

export default NavBar;
