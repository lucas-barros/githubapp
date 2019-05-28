import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledNav } from './nav.style';
import { FaGithub } from 'react-icons/fa';
import { getUser } from 'redux/user/actions';
import { Search, User } from 'components';
import debounce from 'lodash.debounce';

const Nav = ({ getUser, users }) => {
  const debounced = debounce(login => getUser(login), 500);

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
        <User key={user.login} {...user} clickHandler={() => getUser(user.login)} />
      ))}
    </StyledNav>
  );
};

const mapDispatchToProps = {
  getUser
};

const mapStateToProps = ({ userState }) => ({
  users: userState.users
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
