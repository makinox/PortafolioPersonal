import React from 'react';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer } from '../components/';

const IndexPage = () => (
  <>
    <SEO title="Jesús Bossa" />
    <Navbar lang="en" change={() => {}} />
    <Hero lang="en" />
    <About lang="en" />
    <Experience lang="en" />
    <Studies lang="en" />
    <Contact lang="en" />
    <Footer />
  </>
);

export default IndexPage;
