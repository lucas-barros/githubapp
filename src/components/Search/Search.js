import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setType } from 'redux/actions';
import { StyledSearch } from './search.style';

const Search = ({ value, handleChange, type, setType }) => (
  <StyledSearch>
    <input
      className="search-input"
      value={value}
      type="text"
      onChange={handleChange}
      placeholder="Search"
    />
    <div className="search-select">
      <div className="search-option">
        <input
          type="radio"
          value="user"
          name="type"
          onChange={() => setType('user')}
          checked={type === 'user'}
        />
        <label>User</label>
      </div>

      <div className="search-option">
        <input
          type="radio"
          value="language"
          name="type"
          onChange={() => setType('language')}
          checked={type === 'language'}
        />
        <label>Language</label>
      </div>
    </div>
  </StyledSearch>
);

Search.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
};

const mapDispatchToProps = {
  setType
};

const mapStateToProps = ({ type }) => ({
  type
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
