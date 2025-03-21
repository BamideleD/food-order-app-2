import React from "react";
import Cart from "./Cart/Cart";
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.name}>
                {"Mummy Saka's Shop"}
            </div>
            <Cart />
        </div>
    )
}

export default Navigation;