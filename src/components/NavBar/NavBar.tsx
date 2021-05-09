import React from 'react';
import { Bar } from './Navbar.styles';

const LeftChild = <span>Porfolio</span>;
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
  return <Bar leftChild={LeftChild} centerChild={CenterChild} rightChild={RightChild} />;
}

export default NavBar;
