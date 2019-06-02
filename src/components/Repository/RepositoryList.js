import React from 'react';
import { RepositoryItem, List } from 'components';
import { StyledRepositoryList } from './repositoryList.style';

const RepositoryList = ({ repositories, prev, next, hasPreviousPage, hasNextPage }) => {
  console.log(repositories);
  
  if (repositories.length === 0) return <p>No Repositories</p>;

  return (
    <StyledRepositoryList>
      <List prev={prev} next={next} hasPreviousPage={hasPreviousPage} hasNextPage={hasNextPage}>
        {repositories.map(edges => {
          return <RepositoryItem key={edges.node.id} {...edges.node} />;
        })}
      </List>
    </StyledRepositoryList>
  );
};

export default RepositoryList;
