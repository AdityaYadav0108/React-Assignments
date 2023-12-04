const TableRows = ({ num, desc, checkDone, isChecked }) => {
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>{desc}</td>
      <td>
        <input
          className={num - 1}
          checked={isChecked}
          type="checkbox"
          onChange={checkDone}
        />
      </td>
    </tr>
  );
};

export default TableRows;
