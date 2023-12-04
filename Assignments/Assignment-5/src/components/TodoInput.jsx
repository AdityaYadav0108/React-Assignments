import styles from "./TodoInput.module.css";

const TodoInput = ({ keyDown, onChange }) => {
  return (
    <input
      id="todoIn"
      className={styles.myInput}
      type="text"
      onKeyDown={keyDown}
      onChange={onChange}
    />
  );
};

export default TodoInput;
