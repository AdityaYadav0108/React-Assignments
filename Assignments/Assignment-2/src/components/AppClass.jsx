import React, { Component } from 'react';
import styles from './MyFunctionComp.module.css';

class MyClassComp extends Component {
  render() {
    return (
      <div className={`${styles.item} d-flex`}>
        <h2>Hello There, This is my Class Component</h2>
        <p>These Are Also Known As Class-Based Components</p>
        <ul>
          Here Are Some Of The Advantages Of Class Components:
          <li><strong>Simplcity:&nbsp;</strong>They can be more verbose but offer a different way of organizing code.</li>
          <li><strong>Reusability:&nbsp;</strong>Still reusable, but custom hooks are more commonly used for this in functional components.</li>
          <li><strong>Easier Testing:&nbsp;</strong>Testing might involve lifecycle methods, making it a bit different compared to functional components.</li>
        </ul>
      </div>
    );
  }
}

export default MyClassComp;