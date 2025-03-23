import React, { useContext,useState } from "react";
import styles from './Cart.module.css'
import CartContext from "../../../Store/Cart-Context";
import InsideCart from "./InsideCart";



const Cart = (props) => {

    const ctx = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartHandler = () => { 
        setIsCartOpen((prevState) => !prevState);
    };

  

    return (
        <>
            <div className={styles.cart} onClick={toggleCartHandler}>
                <div className={styles.icon}>
                    <img src="https://www.iconpacks.net/icons/3/free-icon-black-shopping-cart-10933.png" alt="Icon" width="25" height="25" />
                </div>
                <div className={styles.title}>
                    {'Your Cart'}
                </div>
                <div className={styles.amount} >
                    {ctx.totalAmount}
                </div>
            </div>
            {isCartOpen && <InsideCart onClose = {toggleCartHandler} />}
        </>
    )
}
export default Cart;