import { useState } from "react";
import TodoHeading from "./components/TodoHeading";
import TodoTable from "./components/Table/TodoTable";
import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";
import InputButton from "./components/InputButton";
import VisibleCheck from "./components/VisibleCheck";
import DoneTodo from "./components/Table/DoneTodo";
import styles from "./App.module.css";

function App() {
  let [tasks, setTasks] = useState([]);
  let [doneTasks, setDoneTasks] = useState([]);
  let [val, setVal] = useState("");
  let [isDoneVisible, setIsDoneVisible] = useState();

  const keyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.trim() !== "") {
        let temp = [...tasks, event.target.value];
        console.log(temp);
        setTasks(temp);
        event.target.value = "";
      }
    }
  };

  const inputValue = (event) => {
    if (event.target.value.trim() !== "") {
      setVal(event.target.value);
    }
  };

  const btnPressed = () => {
    console.log("outside");
    if (val !== "") {
      console.log("inside");
      let temp = [...tasks, val];
      setTasks(temp);
      setVal("");
      document.getElementById("todoIn").value = "";
    }
  };

  const checkDone = (event) => {
    let dndIndex = event.target.className;
    console.log(dndIndex);
    if (event.target.checked) {
      let temp = [...doneTasks, tasks[dndIndex]];
      tasks.splice(dndIndex, 1);
      let updatedTasks = tasks;
      setTasks(updatedTasks);
      setDoneTasks(temp);
    } else {
      let temp = [...tasks, doneTasks[dndIndex]];
      doneTasks.splice(dndIndex, 1);
      let updatedTasks = doneTasks;
      setTasks(temp);
      setDoneTasks(updatedTasks);
    }
  };

  const visibilityCheck = (event) => {
    if (event.target.checked && doneTasks.length!==0) {
      setIsDoneVisible(true);
    } else {
      setIsDoneVisible(false);
    }
  };
  return (
    <>
      <TodoHeading></TodoHeading>
      <div className={styles.container}>
        <TodoContainer>
          <TodoInput keyDown={keyDown} onChange={inputValue}></TodoInput>
          <InputButton onClick={btnPressed}></InputButton>
          <TodoTable
            isChecked={false}
            tasks={tasks}
            checkDone={checkDone}
          ></TodoTable>
        </TodoContainer>
        <VisibleCheck onChange={visibilityCheck}></VisibleCheck>
        <TodoContainer>
          <DoneTodo
            isChecked={true}
            tasks={doneTasks}
            checkDone={checkDone}
            isVisible={isDoneVisible}
          ></DoneTodo>
        </TodoContainer>
      </div>
    </>
  );
}

export default App;
