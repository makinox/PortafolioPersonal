import { useStaticQuery, graphql } from 'gatsby';
export const useProjectQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectImages {
        img1: file(relativePath: { eq: "projects/projects-img1.jpg" }) {
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
        img2: file(relativePath: { eq: "projects/projects-img2.jpg" }) {
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
        img3: file(relativePath: { eq: "projects/projects-img3.jpg" }) {
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
        img4: file(relativePath: { eq: "projects/projects-img4.png" }) {
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
        img5: file(relativePath: { eq: "projects/projects-img5.png" }) {
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
        img6: file(relativePath: { eq: "projects/projects-img6.jpeg" }) {
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
        img7: file(relativePath: { eq: "projects/projects-img7.jpg" }) {
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
        img8: file(relativePath: { eq: "projects/projects-img8.jpg" }) {
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
        img9: file(relativePath: { eq: "projects/projects-img9.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 330
              height: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, cropFocus: ENTROPY }
            )
          }
        }
        img10: file(relativePath: { eq: "projects/projects-img10.png" }) {
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
        img11: file(relativePath: { eq: "projects/projects-img11.png" }) {
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
        img12: file(relativePath: { eq: "projects/projects-img12.png" }) {
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
        img13: file(relativePath: { eq: "projects/projects-img13.jpg" }) {
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
        img14: file(relativePath: { eq: "projects/projects-img14.png" }) {
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
        img15: file(relativePath: { eq: "projects/projects-img15.png" }) {
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
        img16: file(relativePath: { eq: "projects/projects-img16.png" }) {
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
        img17: file(relativePath: { eq: "projects/projects-img17.png" }) {
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
        img18: file(relativePath: { eq: "projects/projects-img18.png" }) {
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
        img19: file(relativePath: { eq: "projects/projects-img19.png" }) {
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
