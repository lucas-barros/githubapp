import React from "react";
import PropTypes from "prop-types";

const RepositoryItem = ({ name, createdAt }) => (
  <p>
    {name} - {createdAt}
  </p>
)

RepositoryItem.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.string
};

export default RepositoryItem;
