import React from 'react';
import { Section } from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export const Bottom: React.FC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "background/form2.svg" }) {
        publicURL
      }
    }
  `);

  return <Section backUrl={data.backgroundImage.publicURL}>{children}</Section>;
};
