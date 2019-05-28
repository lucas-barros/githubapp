import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { getUser } from 'graphqls';
import { addUser } from 'redux/user/actions';
import { Loading } from 'components';
import { StyledHome } from './home.style';
import { Flex } from '@rebass/grid';

import RepositoryItem from 'components/Repository/RepositoryItem';

const User = ({ login, addUser }) => {
  const [page, setPage] = useState({ first: 10 });
  const key = JSON.stringify(`${login}${page}`);

  // Reset page info when login changes
  useEffect(
    () =>
      setPage({
        first: 10,
        last: null,
        before: null,
        after: null
      }),
    [login]
  );
  return (
    <Query query={getUser} variables={{ login, ...page }} skip={!login} key={key}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <p>{error.message}</p>;
        if (!data) return <p>No repositories</p>;

        const { avatarUrl, name, login, email, description, repositories } = data.user;
        const {
          pageInfo: { startCursor: before, endCursor: after, hasPreviousPage, hasNextPage }
        } = repositories;

        return (
          <StyledHome>
            <div className="user">
              <img className="user-avatar" src={avatarUrl} alt={`${name} avatar`} />
              <Flex>
                <span className="user-name">{name}</span>
                <button className="user-add" onClick={() => addUser(data.user)}>
                  Add
                </button>
              </Flex>
              <div>{login}</div>
              <div>{email}</div>
              <div>{description}</div>
            </div>
            <div className="repositories">
              {repositories.edges.map(edges => {
                return <RepositoryItem key={edges.node.id} {...edges.node} />;
              })}
              <div className="pagination">
                <button disabled={!hasPreviousPage} onClick={() => setPage({ before, last: 10 })}>
                  Prev
                </button>
                <button disabled={!hasNextPage} onClick={() => setPage({ after, first: 10 })}>
                  Next
                </button>
              </div>
            </div>
          </StyledHome>
        );
      }}
    </Query>
  );
};

const mapDispatchToProps = {
  addUser
};

const mapStateToProps = ({ userState }) => ({
  login: userState.login
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
