import { useStaticQuery, graphql } from 'gatsby';
import { ProjectImagesQuery } from '../../../graphql-types';

export const useWorkQuery = () => {
  const data: ProjectImagesQuery = useStaticQuery(
    graphql`
      query WorkImages {
        img1: file(relativePath: { eq: "work/work1.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img2: file(relativePath: { eq: "work/work2.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img3: file(relativePath: { eq: "work/work3.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img4: file(relativePath: { eq: "work/work4.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img5: file(relativePath: { eq: "work/work5.png" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img6: file(relativePath: { eq: "work/work6.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img7: file(relativePath: { eq: "work/work7.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  return data;
};
