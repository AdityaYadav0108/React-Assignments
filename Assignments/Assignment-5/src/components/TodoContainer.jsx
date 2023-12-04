import styles from "./TodoContainer.module.css";

const TodoContainer = (props) => {
  return <div className={`${styles.todoContainer}`}>{props.children}</div>;
};

export default TodoContainer;
