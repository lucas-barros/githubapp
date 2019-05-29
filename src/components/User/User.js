import React from 'react';
import { connect } from 'react-redux';
import { addUser } from 'redux/actions';
import { RepositoryItem, List } from 'components';
import { Flex } from '@rebass/grid';
import { StyledUser } from './user.style';

const User = ({ data, setPage, addUser }) => {
  if (!data) return <p>No Users</p>;

  const { avatarUrl, name, login, email, description, repositories } = data.user;
  const {
    pageInfo: { startCursor: before, endCursor: after, hasPreviousPage, hasNextPage }
  } = repositories;

  return (
    <StyledUser>
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
        <List
          prev={() => setPage({ before, last: 10 })}
          next={() => setPage({ after, first: 10 })}
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
  addUser
};

export default connect(
  null,
  mapDispatchToProps
)(User);
