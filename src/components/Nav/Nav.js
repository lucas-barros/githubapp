import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledNav } from './nav.style';
import { FaGithub } from 'react-icons/fa';
import { getRepositories } from 'redux/repositories/actions';
import { Search } from 'components';
import debounce from 'lodash.debounce';

const Nav = ({ getRepositories }) => {
  const debounced = debounce((login) => getRepositories(login), 500);

  const handleChange = e => {
    debounced(e.target.value);
  };

  return (
    <StyledNav>
      <div className="nav-brand">
        <Link to="/" className="nav-link">
          <FaGithub size="30" />
        </Link>
        <Search handleChange={handleChange} />
      </div>
    </StyledNav>
  );
};

const mapDispatchToProps = {
  getRepositories
};

export default connect(
  null,
  mapDispatchToProps
)(Nav);
