// CounterDisplay.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CounterDisplay = ({ counter }) => {
  return <p>Counter: {counter}</p>;
};

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default CounterDisplay;
