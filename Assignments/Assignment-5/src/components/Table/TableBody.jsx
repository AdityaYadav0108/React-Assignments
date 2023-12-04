import TableRows from "./TableRows";

const TableBody = ({ tasks, checkDone, isChecked }) => {
  return (
    <tbody>
      {tasks.map((task, index) => {
        return (
          <TableRows
            key={index}
            isChecked={isChecked}
            num={index + 1}
            desc={task}
            checkDone={checkDone}
          ></TableRows>
        );
      })}
    </tbody>
  );
};

export default TableBody;
