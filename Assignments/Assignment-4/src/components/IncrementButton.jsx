// IncrementButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const IncrementButton = ({ increment }) => {
  return <button className="btn btn-success" onClick={increment}>Increment</button>;
};

IncrementButton.propTypes = {
  increment: PropTypes.func.isRequired,
};

export default IncrementButton;
