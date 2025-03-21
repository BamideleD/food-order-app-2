import React from "react";
import styles from './Cart.module.css'


const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className={styles.icon}>
                <img src="https://www.iconpacks.net/icons/3/free-icon-black-shopping-cart-10933.png" alt="Icon" width="25" height="25" />
            </div>
            <div className={styles.title}>
                {'Your Cart'}
            </div>
            <div className={styles.amount}>
                {'0'}
            </div>
        </div>
    )
}
export default Cart;