import { useStaticQuery, graphql } from 'gatsby';
export const useNavbarQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.svg" }) {
          publicURL
        }
      }
    `
  );
  return data;
};
