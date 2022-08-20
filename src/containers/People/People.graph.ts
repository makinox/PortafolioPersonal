import { useStaticQuery, graphql } from 'gatsby';
import { ProjectImagesQuery } from '../../../graphql-types';

export const usePeopleQuery = () => {
  const data: ProjectImagesQuery = useStaticQuery(
    graphql`
      query PeopleImages {
        img1: file(relativePath: { eq: "people/people1.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img2: file(relativePath: { eq: "people/people2.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img3: file(relativePath: { eq: "people/people3.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  return data;
};
