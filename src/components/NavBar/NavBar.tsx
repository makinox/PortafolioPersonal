import React from 'react';
import { useNavbarQuery } from './Navbar.graph';
import { Bar, BarLogo } from './Navbar.styles';

const LeftChild = ({ LogoSource }) => (
  <div className="flex items-center">
    <BarLogo src={LogoSource} alt="Portafolio logo" />
    <span>Porfolio</span>
  </div>
);

const CenterChild = (
  <>
    <span>About</span>
    <span>Experience</span>
    <span>Education</span>
    <span>Contact</span>
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
