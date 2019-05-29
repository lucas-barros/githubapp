import gql from 'graphql-tag';

const getRepos = gql`
  query repo($searchString: String!, $after: String, $before: String, $first: Int, $last: Int) {
    search(
      query: $searchString
      first: $first
      last: $last
      after: $after
      before: $before
      type: REPOSITORY
    ) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            description
            createdAt
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
