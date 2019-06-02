import gql from 'graphql-tag';

const getRepos = gql`
  query repo($searchString: String!, $after: String, $before: String, $first: Int, $last: Int) {
    search(
      query: $searchString
      first: $first
      last: $last
      after: $after
      before: $before
      type: USER
    ) {
      edges {
        node {
          ... on User {
            id
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`;

export default getRepos;
