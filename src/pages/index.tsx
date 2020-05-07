import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { Navbar } from '../components/navbar/navbar';

const IndexPage = () => (
  <>
    <Navbar lang="en" change={() => {}} />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/home/">Go to home</Link>
  </>
);

export default IndexPage;
