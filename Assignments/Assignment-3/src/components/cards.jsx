import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = ({items}) => {
  return(
    <div className={styles.cardsContainer}>
      {items.map(item => (
        <Card key={item.myKey} image={item.imgSrc} title={item.title} text={item.text}></Card>
      ))}
    </div>
  );
}

export default Cards;