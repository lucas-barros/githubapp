import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearch } from './search.style';

const Search = ({ value, handleChange }) => (
  <StyledSearch>
    <input value={value} type="text" onChange={handleChange} placeholder="Search"/>
  </StyledSearch>
);

Search.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
};

export default Search;
