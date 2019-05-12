import React, { Fragment, useState, useRef } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { RepositoryItem } from "./";

const query = gql`
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

const RepositoryList = () => {
  const [login, setLogin] = useState("jordwalke");
  const loginInput = useRef(null);

  const submitHnadler = e => {
    setLogin(loginInput.current.value);
    e.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={submitHnadler}>
        <input type="text" ref={loginInput} placeholder="Github username" />
        <button type="submit"> Search </button>
      </form>
      <Query query={query} variables={{ login }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{console.log(error)}Error :(</p>;

          return data.user.repositories.edges.map(({ node }) => <RepositoryItem key={node.id} {...node} />);
        }}
      </Query>
    </Fragment>
  );
};

export default RepositoryList;
