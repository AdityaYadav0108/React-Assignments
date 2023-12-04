import styles from "./VisibleCheck.module.css";
const VisibleCheck = ({ onChange }) => {
  return (
    <div className={styles.subContainer}>
      <span>Show Completed</span>
      <input type="checkbox" onChange={onChange} />
    </div>
  );
};

export default VisibleCheck;
