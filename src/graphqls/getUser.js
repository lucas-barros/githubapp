import gql from 'graphql-tag';

const getUser = gql`
  query user($searchString: String!, $after: String, $before: String, $first: Int, $last: Int) {
    user(login: $searchString) {
      name
      avatarUrl
      login
      bio
      company
      createdAt
      email
      repositories(
        first: $first
        last: $last
        after: $after
        before: $before
        ownerAffiliations: [OWNER]
        orderBy: {field: CREATED_AT, direction: DESC}
      ) {
        edges {
          node {
            id
            createdAt
            name
            description
            url
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
  }
`;

export default getUser;
