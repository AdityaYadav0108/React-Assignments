import styles from "./TableHead.module.css";

const TableHead = () => {
  return (
    <thead className={styles.tHead}>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Description</th>
        <th scope="col">Done/Not Done</th>
      </tr>
    </thead>
  );
};

export default TableHead;
