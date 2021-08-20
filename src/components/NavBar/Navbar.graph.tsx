import { useStaticQuery, graphql } from 'gatsby';
export const useNavbarQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.svg" }) {
          publicURL
        }
        logo2: file(relativePath: { eq: "logo2.svg" }) {
          publicURL
        }
      }
    `
  );
  return data;
};
