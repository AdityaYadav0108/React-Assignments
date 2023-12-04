import styles from './InputButton.module.css';

const InputButton = ({onClick}) => (<button className={`${styles.mybtn} btn btn-primary`} onClick={onClick}>Add Task</button>);

export default InputButton;