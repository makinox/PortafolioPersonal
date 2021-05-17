import { useStaticQuery, graphql } from 'gatsby';
export const useProjectQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectImages {
        img1: file(relativePath: { eq: "projects/projects-img1.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img2: file(relativePath: { eq: "projects/projects-img2.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img3: file(relativePath: { eq: "projects/projects-img3.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img4: file(relativePath: { eq: "projects/projects-img4.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img5: file(relativePath: { eq: "projects/projects-img5.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img6: file(relativePath: { eq: "projects/projects-img6.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img7: file(relativePath: { eq: "projects/projects-img7.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img8: file(relativePath: { eq: "projects/projects-img8.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img9: file(relativePath: { eq: "projects/projects-img9.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img10: file(relativePath: { eq: "projects/projects-img10.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img11: file(relativePath: { eq: "projects/projects-img11.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img12: file(relativePath: { eq: "projects/projects-img12.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img13: file(relativePath: { eq: "projects/projects-img13.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img14: file(relativePath: { eq: "projects/projects-img14.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img15: file(relativePath: { eq: "projects/projects-img15.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img16: file(relativePath: { eq: "projects/projects-img16.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img17: file(relativePath: { eq: "projects/projects-img17.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img18: file(relativePath: { eq: "projects/projects-img18.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        img19: file(relativePath: { eq: "projects/projects-img19.png" }) {
          childImageSharp {
            gatsbyImageData(width: 330, height: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  return data;
};
