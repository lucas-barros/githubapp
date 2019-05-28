import React from 'react';
import { StyledUser } from './userstyle';

const User = ({ avatarUrl, name, clickHandler }) => {
  return (
    <StyledUser>
      <img className="user-avatar" src={avatarUrl} alt={name} onClick={clickHandler} />
    </StyledUser>
  );
};

export default User;
