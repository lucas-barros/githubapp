import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledNav } from './nav.style';
import { FaGithub } from 'react-icons/fa';
import { getUser } from 'store/actions';
import { Search, UserCard } from 'components';
import debounce from 'lodash.debounce';

const Nav = ({ getUser, users }) => {
  const debounced = debounce(searchString => getUser(searchString), 500);

  const handleChange = e => {
    debounced(e.target.value);
  };

  return (
    <StyledNav>
      <Link to="/" className="nav-brand">
        <FaGithub size="30" />
      </Link>
      <Search handleChange={handleChange} />
      {users.map(user => (
        <UserCard key={user.login} {...user} clickHandler={() => getUser(user.login)} />
      ))}
    </StyledNav>
  );
};

const mapDispatchToProps = {
  getUser
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
