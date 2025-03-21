import styles from './App.module.css'
import FoodItems from './Components/FoodItems';
import Navigation from './Components/Navigation/Navigation';
import ShopDesc from './Components/ShopDesc';
import Card from './UI/Card/Card';

function App() {


  const FoodData = [
    {title: "Chin Chin",
      desc: "Refreshing Snack",
      price: 16.50
    },
    {title: "Jollof Rice",
      desc: "Nigerian National Dish",
      price: 35.50
    },
    {title: "Pounded Yam",
      desc: "Nigerian Delicacy",
      price: 30.50
    },
    {title: "Suya",
      desc: "Late Night Snack",
      price: 50.50
    },
  ]


  return (
    <div className={styles.app}>
      <Navigation />
      <ShopDesc/>
      <Card className = {styles.fooditems}>
      {FoodData.map((item) => {
        return (
          <FoodItems title = {item.title} desc = {item.desc} price = {item.price} key = {item.title}/>
        )
      })}
      </Card>
      
    </div>
  );
}

export default App;
