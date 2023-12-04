import AppHead from './components/AppHead';
import Cards from './components/cards';
import styles from './App.module.css'

function App() {
  let allItems = [
  { 
    myKey:1,
    imgSrc:
      "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/avatar.jpg",
    title: "AVATAR",
    text: "NETFLIX MOVIE",
  },
  { 
    myKey:2,
    imgSrc:
      "https://bollytrendz.com/wp-content/uploads/2021/07/IMG_20210702_150749-1.jpg",
    title: "TOMORROW WAR",
    text: "NETFLIX MOVIE",
  },
  { 
    myKey:3,
    imgSrc:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
    title: "AVENGERS",
    text: "AMAZON PRIME",
  },
];


  return (
    <center className={styles.container}>
      <AppHead></AppHead>
      <Cards items={allItems}></Cards>
    </center>
  )
}

export default App
