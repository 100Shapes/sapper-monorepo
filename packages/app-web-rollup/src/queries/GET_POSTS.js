import { gql } from 'apollo-boost';

export default gql`
  {
    posts {
      data {
        id
        title
      }
    }
  }
`;
