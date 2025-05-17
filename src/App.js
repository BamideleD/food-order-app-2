import { useState, useEffect } from 'react';
import styles from './App.module.css'
import FoodItems from './Components/FoodItems';
import Navigation from './Components/Navigation/Navigation';
import ShopDesc from './Components/ShopDesc';
import Card from './UI/Card/Card';
import CartContext from './Store/Cart-Context';

function App() {

  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch('https://mummy-sakas-food-app-default-rtdb.firebaseio.com/Meals.json')
       .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            title: data[key].Title,
            desc: data[key].Desc,
            price: data[key].Price,
          });
        }
        setFoodData(loadedMeals);
      })
      .catch((error) => {
        console.error('Failed to fetch food data:', error);
      });


  }, [])

 


  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.title === item.title);
      
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          amount: updatedItems[existingItemIndex].amount + item.amount,
        }; // ✅ Increase quantity
        return updatedItems;
      } else {
        return [...prevItems, item]; // ✅ Add new item
      }
    });

    setTotalPrice((prevTotal) => prevTotal + item.price * item.amount);
    setTotalAmount((prevAmount) => prevAmount + item.amount); // ✅ Update total items count
  };

  const clearCart = () => {
  setItems([]);
  setTotalAmount(0);
  setTotalPrice(0);
  };

  
  
  return (
    <CartContext.Provider
      value={{
        totalAmount, // ✅ Now properly tracks item count
        totalPrice,
        items,
        addItem,
        clearCart,
      }}
    >
      <div className={styles.app}>
        <Navigation />
        <ShopDesc />
        <Card className={styles.fooditems}>
          {foodData.map((item) => (
            <FoodItems title={item.title} desc={item.desc} price={item.price} key={item.title} />
          ))}
        </Card>
      </div>
    </CartContext.Provider>
  );
}

export default App;
