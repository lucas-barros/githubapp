import gql from 'graphql-tag';

const getRepositories = gql`
  query user($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      login
      repositories(first: 10) {
        edges {
          node {
            id
            createdAt
            name
            description
            url
            languages(first: 10) {
              edges {
                node {
                  id
                  name
                }
              }
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
  }
`;

export default getRepositories;
