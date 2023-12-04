import styles from "./TodoTable.module.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const DoneTodo = ({ tasks, checkDone, isChecked, isVisible }) => {
  if (isVisible) {
    return (
      <table className={`${styles.myTable} table table-striped`}>
        <TableHead></TableHead>
        <TableBody
          isChecked={isChecked}
          tasks={tasks}
          checkDone={checkDone}
        ></TableBody>
      </table>
    );
  }
};

export default DoneTodo;
