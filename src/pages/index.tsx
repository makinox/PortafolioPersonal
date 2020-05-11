import React from 'react';
import { Link } from 'gatsby';
import { SEO, Navbar, Hero } from '../components/';

const IndexPage = () => (
  <>
    <Navbar lang="en" change={() => {}} />
    <Hero lang="en" />
    <SEO title="Home" />

    <Link to="/home/">Go to home</Link>
  </>
);

export default IndexPage;
