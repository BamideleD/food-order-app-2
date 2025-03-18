import React from "react";
import Button from "../UI/Button/Button";
import styles from './FoodItems.module.css';
import Card from "../UI/Card/Card";


const FoodItems = (props) => {
    return (
        <div className={styles.overall}>
            <div className={styles.firsthalf}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.desc}>
                    {props.desc}
                </div>
                <div className={styles.price}>
                    ${props.price}
                </div>
            </div>
            <div className={styles.secondhalf}>
                <div className={styles.amount}>
                    <div> Amount </div>
                    <input type="number" defaultValue={1}/>
                </div>
                <div>
                    <Button className={styles.button}> Add </Button>
                </div>
            </div>
        </div>
    )
}


export default FoodItems;