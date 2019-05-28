import React from 'react';
import { StyledRepositoryList } from './repositoryList.style';
import RepositoryItem from './RepositoryItem';

const RepositoryList = ({ repositories, next, prev, hasPreviousPage, hasNextPage }) => {
  return (
    <StyledRepositoryList>
      <div className="repositories">
        {repositories.edges.map(edges => (
          <RepositoryItem key={edges.node.id} {...edges.node} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={!hasPreviousPage} onClick={prev}>
          Prev
        </button>
        <button disabled={!hasNextPage} onClick={next}>
          Next
        </button>
      </div>
    </StyledRepositoryList>
  );
};

export default RepositoryList;
