import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { getRepositories } from 'graphqls';
import { Loading } from 'components';
import { StyledRepository } from './repository.style';
import RepositoryItem from './RepositoryItem';

const Repository = ({ login }) => {
  const [page, setPage] = useState({first: 10});
  const key = JSON.stringify(`${login}${page}`);

  // Reset page info when login changes
  useEffect(() => setPage({
    first: 10,
    last: null,
    before: null,
    after: null
  }), [login]);

  return (
    <Query query={getRepositories} variables={{ login, ...page }} skip={!login} key={key}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <p>{error.message}</p>;
        if (!data) return <p>No repositories</p>;

        const { avatarUrl, name, login, repositories } = data.user;
        const {
          pageInfo: { startCursor: before, endCursor: after, hasPreviousPage, hasNextPage }
        } = repositories;

        return (
          <StyledRepository>
            <div className="owner">
              <img className="owner-avatar" src={avatarUrl} alt={`${name} avatar`} />
              <span className="owner-name">{name}</span>
              <span>{login}</span>
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
          </StyledRepository>
        );
      }}
    </Query>
  );
};

const mapStateToProps = ({ repositoriesState }) => ({
  login: repositoriesState.login
});

export default connect(mapStateToProps)(Repository);
