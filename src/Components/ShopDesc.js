import React from "react";
import Card from "../UI/Card/Card";
import styles from './ShopDesc.module.css'

const ShopDesc = () => {
    return(
        <Card className = {styles.shopdesc}>
            <div className={styles.header}>
                A Taste of Africa, Wherever You Are!
            </div>
            <div className={styles.content}>
                A vibrant African restaurant overseas, bringing the rich flavors and traditions of Africa to a new audience. With authentic recipes, bold spices, and a warm, cultural ambiance, we offer a true taste of Africa. Whether you're craving classic dishes like Jollof rice, suya, or injera, or looking to explore new flavors, our menu is crafted to delight. Experience Africa on a plate—where every meal tells a story!
            </div>
        </Card>
    )
}

export default ShopDesc;