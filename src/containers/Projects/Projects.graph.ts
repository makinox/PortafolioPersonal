import { useStaticQuery, graphql } from 'gatsby';
export const useProjectQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectImages {
        img1: file(relativePath: { eq: "projects/projects-img1.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img1Big: file(relativePath: { eq: "projects/projects-img1.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img2: file(relativePath: { eq: "projects/projects-img2.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img2Big: file(relativePath: { eq: "projects/projects-img2.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img3: file(relativePath: { eq: "projects/projects-img3.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img3Big: file(relativePath: { eq: "projects/projects-img3.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img4: file(relativePath: { eq: "projects/projects-img4.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img4Big: file(relativePath: { eq: "projects/projects-img4.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img5: file(relativePath: { eq: "projects/projects-img5.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img5Big: file(relativePath: { eq: "projects/projects-img5.png" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img6: file(relativePath: { eq: "projects/projects-img6.jpeg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img6Big: file(relativePath: { eq: "projects/projects-img6.jpeg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img7: file(relativePath: { eq: "projects/projects-img7.jpeg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img7Big: file(relativePath: { eq: "projects/projects-img7.jpeg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img8: file(relativePath: { eq: "projects/projects-img8.jpeg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img8Big: file(relativePath: { eq: "projects/projects-img8.jpeg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img9: file(relativePath: { eq: "projects/projects-img9.jpeg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img9Big: file(relativePath: { eq: "projects/projects-img9.jpeg" }) {
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img10: file(relativePath: { eq: "projects/projects-img10.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img10Big: file(relativePath: { eq: "projects/projects-img10.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img11: file(relativePath: { eq: "projects/projects-img11.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img11Big: file(relativePath: { eq: "projects/projects-img11.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img12: file(relativePath: { eq: "projects/projects-img12.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img12Big: file(relativePath: { eq: "projects/projects-img12.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img13: file(relativePath: { eq: "projects/projects-img13.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img13Big: file(relativePath: { eq: "projects/projects-img13.jpg" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img14: file(relativePath: { eq: "projects/projects-img14.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img14Big: file(relativePath: { eq: "projects/projects-img14.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img15: file(relativePath: { eq: "projects/projects-img15.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img15Big: file(relativePath: { eq: "projects/projects-img15.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img16: file(relativePath: { eq: "projects/projects-img16.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img16Big: file(relativePath: { eq: "projects/projects-img16.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img17: file(relativePath: { eq: "projects/projects-img17.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img17Big: file(relativePath: { eq: "projects/projects-img17.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img18: file(relativePath: { eq: "projects/projects-img18.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img18Big: file(relativePath: { eq: "projects/projects-img18.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img19: file(relativePath: { eq: "projects/projects-img19.png" }) {
          childImageSharp {
            fixed(width: 200, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        img19Big: file(relativePath: { eq: "projects/projects-img19.png" }) {
          childImageSharp {
            fixed(width: 400, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );
  return data;
};
