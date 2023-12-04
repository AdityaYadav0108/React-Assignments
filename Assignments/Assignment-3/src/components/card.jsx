import styles from "./Card.module.css";

const Card = ({image, title, text}) => {
  return (
    <div className={`card ${styles.myCard}`} style={{width: "18rem"}}>
      <img className={styles.myImg} src={image} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
    </div>
  )
}

export default Card;