import React from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from 'redux/actions';
import { RepositoryItem, List } from 'components';
import { Flex } from '@rebass/grid';
import { StyledUser } from './user.style';
import { format } from 'date-fns';

const getReposByYear = repos => {
  return repos.reduce((acc, repo) => {
    const year = format(repo.node.createdAt, 'YYYY');
    acc[year] = acc[year] ? acc[year] + 1 : 1;
    return acc;
  }, {});
};

const isUserStored = (currentUser, users) => users.some(user => user.login === currentUser.login);

const User = ({ data, setPage, addUser, users, removeUser }) => {  
  if (!data) return <p>No Users</p>;

  const { avatarUrl, name, login, email, description, repositories } = data.user;
  const {
    pageInfo: { startCursor: before, endCursor: after, hasPreviousPage, hasNextPage }
  } = repositories;

  const reposByYear = getReposByYear(repositories.edges);

  const button = isUserStored(data.user, users) ? (
    <button className="user-button user-button-remove" onClick={() => removeUser(data.user)}>
      Remove
    </button>
  ) : (
    <button className="user-button user-button-add" onClick={() => addUser(data.user)}>
      Add
    </button>
  );

  return (
    <StyledUser>
      <div className="user">
        <img className="user-avatar" src={avatarUrl} alt={`${name} avatar`} />
        <Flex>
          <span className="user-name">{name}</span>
          {button}
        </Flex>
        <div>{login}</div>
        <div>{email}</div>
        <div>{description}</div>
      </div>
      <div className="repositories">
        <strong>Repos per year</strong>
        <ul className="digest">
          {Object.keys(reposByYear).map(year => (
            <li key={year} className="digest-item">
              <div className="digest-amount">{reposByYear[year]}</div>
              <div className="digest-year">{year}</div>
            </li>
          ))}
        </ul>
        <List
          prev={() => setPage({ before, last: 100 })}
          next={() => setPage({ after, first: 100 })}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
        >
          {repositories.edges.map(edges => {
            return <RepositoryItem key={edges.node.id} {...edges.node} />;
          })}
        </List>
      </div>
    </StyledUser>
  );
};

const mapDispatchToProps = {
  addUser,
  removeUser
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
