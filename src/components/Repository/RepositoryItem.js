import React from 'react';
import PropTypes from 'prop-types';
import { StyledRepositoryItem } from './repositoryItem.style';
import { format } from 'date-fns'

const RepositoryItem = ({ name, url, createdAt, description }) => (
  <StyledRepositoryItem>
    <a href={url}>{name}</a>
    <p>{description}</p>
    <span className="date">{format(createdAt, 'MMMM Do GGGG')}</span>
  </StyledRepositoryItem>
);

RepositoryItem.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string
};

export default RepositoryItem;
