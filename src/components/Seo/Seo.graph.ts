import { useStaticQuery, graphql } from 'gatsby';
export const useSeoQuery = () => {
  const data = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            keywords
          }
        }
      }
    `
  );
  return data;
};
