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
        preview: file(relativePath: { eq: "preview.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 330
              height: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, cropFocus: NORTH }
            )
          }
        }
      }
    `
  );
  return data;
};
