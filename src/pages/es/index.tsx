import { graphql } from 'gatsby';
import { IndexContainer } from '../../containers';

export default IndexContainer;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "preview.png" }) {
      publicURL
    }
  }
`;
