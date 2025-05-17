import React, { useState, useContext } from 'react';
import styles from './Checkout.module.css';
import CartContext from '../../../Store/Cart-Context';

const CheckoutForm = ({ onClose }) => {
  const { items, totalAmount, totalPrice, clearCart } = useContext(CartContext);
  const [userData, setUserData] = useState({ name: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const order = {
      user: userData,
      items,
      totalAmount,
      totalPrice,
    };

    fetch('https://mummy-sakas-food-app-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Order failed.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Order successful:', data);
        setSubmitted(true);

      })
      .catch((error) => {
        console.error('Error submitting order:', error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
        clearCart();
      });
  };

  if (submitted) {
    return (
      <div className={styles.confirmation}>
        <p>✅ Order placed successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Checkout</h3>
      <label>Name</label>
      <input name="name" value={userData.name} onChange={handleChange} required />

      <label>Address</label>
      <input name="address" value={userData.address} onChange={handleChange} required />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Placing Order...' : 'Confirm Order'}
      </button>
    </form>
  );
};

export default CheckoutForm;
