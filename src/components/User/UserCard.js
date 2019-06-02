import React from 'react';
import { StyledUserCard } from './userCard.style';

const UserCard = ({ avatarUrl, name, clickHandler }) => {
  return (
    <StyledUserCard>
      <img className="user-avatar" src={avatarUrl} alt={name} onClick={clickHandler} />
    </StyledUserCard>
  );
};

export default UserCard;
