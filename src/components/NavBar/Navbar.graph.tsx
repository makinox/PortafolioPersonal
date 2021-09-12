import { useStaticQuery, graphql } from 'gatsby';
import { NavbarQuery } from '../../../graphql-types';

export const useNavbarQuery = () => {
  const data: NavbarQuery = useStaticQuery(
    graphql`
      query Navbar {
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
