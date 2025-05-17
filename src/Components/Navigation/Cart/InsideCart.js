import React, { useContext, useState } from "react";
import Card from '../../../UI/Card/Card';
import styles from './InsideCart.module.css';
import CartContext from "../../../Store/Cart-Context";
import CheckoutForm from "./Checkout";

const InsideCart = (props) => {
  const ctx = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const checkoutButtonHandler = () => {
    setIsCheckingOut(true);
  };

  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose}></div>

      <Card className={styles.cartModal}>
        <button className={styles.closeButton} onClick={props.onClose}>×</button>
        <h2 className={styles.cartTitle}>Your Cart</h2>

        {isCheckingOut ? (
          <CheckoutForm onClose={props.onClose} />
        ) : (
          <>
            {ctx.items.length === 0 ? (
              <p className={styles.emptyCart}>Your cart is empty.</p>
            ) : (
              <ul className={styles.cartList}>
                {ctx.items.map((item, index) => (
                  <li key={index} className={styles.cartItem}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemAmount}>x{item.amount}</span>
                    <span className={styles.itemPrice}>
                      ${(item.price * item.amount).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.total}>
              <h3>Total: ${ctx.totalPrice.toFixed(2)}</h3>
            </div>

            {ctx.items.length > 0 && (
              <button className={styles.checkoutButton} onClick={checkoutButtonHandler}>
                Checkout
              </button>
            )}
          </>
        )}
      </Card>
    </>
  );
};

export default InsideCart;
