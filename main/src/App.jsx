import { useState } from 'react'
import styles from './App.module.css'
import App1 from '../../Assignments/Assignment-1/src/App';
import App2 from '../../Assignments/Assignment-2/src/App';
import App3 from '../../Assignments/Assignment-3/src/App';
import App4 from '../../Assignments/Assignment-4/src/App';
import App5 from '../../Assignments/Assignment-5/src/App';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'A':
        return <App1 />;
      case 'B':
        return <App2 />;
      case 'C':
        return <App3 />;
      case 'D':
        return <App4 />;
      case 'E':
        return <App5 />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => setSelectedComponent('A')}>Show A</button>
      <button onClick={() => setSelectedComponent('B')}>Show B</button>
      <button onClick={() => setSelectedComponent('C')}>Show C</button>
      <button onClick={() => setSelectedComponent('D')}>Show D</button>
      <button onClick={() => setSelectedComponent('E')}>Show E</button>

      {renderComponent()}
    </div>
  );
}

export default App;
