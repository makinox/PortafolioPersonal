import { graphql } from 'gatsby';
import React from 'react';
import { SEO } from '../components';

const NotFoundPage = ({ data }: { data: any }) => (
  <>
    <SEO title="404: Not found" image={data.placeholderImage.publicURL} pathname="" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "preview.png" }) {
      publicURL
    }
  }
`;

export default NotFoundPage;
