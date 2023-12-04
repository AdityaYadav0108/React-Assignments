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
      <div className={styles.btnContainer}>
      <button className={`${styles.myBtn} btn btn-outline-secondary`} onClick={() => setSelectedComponent('A')}>Assignment-1</button>
      <button className={`${styles.myBtn} btn btn-outline-secondary`} onClick={() => setSelectedComponent('B')}>Assignment-2</button>
      <button className={`${styles.myBtn} btn btn-outline-secondary`} onClick={() => setSelectedComponent('C')}>Assignment-3</button>
      <button className={`${styles.myBtn} btn btn-outline-secondary`} onClick={() => setSelectedComponent('D')}>Assignment-4</button>
      <button className={`${styles.myBtn} btn btn-outline-secondary`} onClick={() => setSelectedComponent('E')}>Assignment-5</button>
      </div>

      {renderComponent()}
    </div>
  );
}

export default App;
