import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './list.style';

const List = ({ children = [], next, prev, hasPreviousPage = false, hasNextPage = false }) => {
  return (
    <StyledList>
      <div>{children}</div>
      <div className="pagination">
        <button disabled={!hasPreviousPage} onClick={prev}>
          Prev
        </button>
        <button disabled={!hasNextPage} onClick={next}>
          Next
        </button>
      </div>
    </StyledList>
  );
};

List.propTypes = {
  children: PropTypes.array,
  next: PropTypes.func,
  prev: PropTypes.func,
  hasPreviousPage: PropTypes.bool,
  hasNextPage: PropTypes.bool
};

export default List;
