import React from 'react';
import { Link } from 'gatsby';
import { SEO, Navbar, Hero, About, Experience } from '../components/';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar lang="en" change={() => {}} />
    <Hero lang="en" />
    <About lang="en" />
    <Experience lang="en" />

    <Link to="/home/">Go to home</Link>
  </>
);

export default IndexPage;
