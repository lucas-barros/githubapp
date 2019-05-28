import gql from 'graphql-tag';

const getUser = gql`
  query user($login: String!, $after: String, $before: String, $first: Int, $last: Int) {
    user(login: $login) {
      name
      avatarUrl
      login
      bio
      company
      createdAt
      email
      repositories(first: $first, last: $last, after: $after, before: $before) {
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
