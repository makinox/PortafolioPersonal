import { graphql } from 'gatsby';
import React from 'react';
import { NavBar } from '../components';
import { Description, Hero, Projects } from '../containers';

function IndexPage({ data }) {
  return (
    <>
      {console.log({ data })}
      <NavBar />
      <main>
        <Hero />
        <Description />
        <Projects />
      </main>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
