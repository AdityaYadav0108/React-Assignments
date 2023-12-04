import { useState } from 'react';
import styles from './App.module.css';
import CounterDisplay from './components/CounterDisplay';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={`${styles.container} d-flex`}>
      <h1>Counter App</h1>
      <CounterDisplay counter={counter} />
      <IncrementButton increment={incrementCounter} />
      <DecrementButton decrement={decrementCounter} />
    </div>
  );
};

export default App;