import React from 'react';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer, Top, Bottom } from '../components/';

const IndexPage = () => (
  <>
    <SEO title="Jesús Bossa" />
    <Top>
      <Navbar lang="en" change={() => {}} />
      <Hero lang="en" />
      <About lang="en" />
    </Top>
    <Experience lang="en" />
    <Studies lang="en" />
    <Bottom>
      <Contact lang="en" />
      <Footer />
    </Bottom>
  </>
);

export default IndexPage;
