import styles from './MyFunctionComp.module.css';

function MyFunctionComp(){
  return (
    <div className={`${styles.item} d-flex`}>
      <h2>Hello There, This is my Functional Component</h2>
      <p>These Are Also Known As Function Based Components</p>
      <ul> Here Are Some Of The Advantages Of Function Based Components:
        <li><strong>Simplcity:&nbsp;</strong>They are generally more concise and easier to read.</li>
        <li><strong>Reusability:&nbsp;</strong>Easier to extract and reuse logic using custom hooks.</li>
        <li><strong>Easier Testing:&nbsp;</strong>Functional component, especially those that are stateless and pure, are generally easier to test.</li>
      </ul>
    </div>
  )
}

export default MyFunctionComp;