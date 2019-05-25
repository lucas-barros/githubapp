import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { getRepositories } from 'graphqls';
import { Loading } from 'components';
import { StyledRepository } from './repository.style';
import RepositoryItem from './RepositoryItem';

const Repository = ({ login }) => {
  console.log(login);

  return (
    <Query query={getRepositories} variables={{ login }} skip={!login}>
      {({ loading, error, data }) => {
        console.log(loading);
        console.log(error);

        if (loading) return <Loading />;
        if (error) return <p>{error.message}</p>;
        if (!data) return <p>No repositories</p>;
        console.log(data);
        return (
          <StyledRepository>
            <div className="owner">
              <img
                className="owner-avatar"
                src={data.user.avatarUrl}
                alt={`${data.user.name} avatar`}
              />
              <span className="owner-name">{data.user.name}</span>
              <span>{data.user.login}</span>
            </div>
            <div className="repositories">
              {data.user.repositories.edges.map(edges => {
                return <RepositoryItem key={edges.node.id} {...edges.node} />;
              })}
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
