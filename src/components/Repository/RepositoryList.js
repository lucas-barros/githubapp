import React from 'react';
import { RepositoryItem, List } from 'components';
import { StyledRepositoryList } from './repositoryList.style';

const RepositoryList = ({ data, setPage }) => {
  if (data.search.edges.length === 0) return <p>No Repositories</p>;

  const {
    pageInfo: { startCursor: before, endCursor: after, hasPreviousPage, hasNextPage }
  } = data.search;

  return (
    <StyledRepositoryList>
      <List
        prev={() => setPage({ before, last: 10 })}
        next={() => setPage({ after, first: 10 })}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
      >
        {data.search.edges.map(edges => {
          return <RepositoryItem key={edges.node.id} {...edges.node} />;
        })}
      </List>
    </StyledRepositoryList>
  );
};

export default RepositoryList;
