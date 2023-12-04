import MyFunctionComp from './components/AppFunc'
import MyClassComp from './components/AppClass'
import styles from './App.module.css'

function App() {
  
  return (
    <center className={`${styles.container} d-flex`}>
      <h1>Assignment-2</h1>
      <MyFunctionComp/>
      <MyClassComp/>
    </center>
  )
}

export default App
