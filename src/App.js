import { useState } from 'react';
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

  const FoodData = [
  {title: "Chin Chin", desc: "Refreshing Snack", price: 16.50},
  {title: "Jollof Rice", desc: "Nigerian National Dish",price: 35.50},
  {title: "Pounded Yam", desc: "Nigerian Delicacy", price: 30.50},
  {title: "Suya", desc: "Late Night Snack", price: 50.50},]


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
  
  
  return (
    <CartContext.Provider
      value={{
        totalAmount, // ✅ Now properly tracks item count
        totalPrice,
        items,
        addItem,
      }}
    >
      <div className={styles.app}>
        <Navigation />
        <ShopDesc />
        <Card className={styles.fooditems}>
          {FoodData.map((item) => (
            <FoodItems title={item.title} desc={item.desc} price={item.price} key={item.title} />
          ))}
        </Card>
      </div>
    </CartContext.Provider>
  );
}

export default App;
