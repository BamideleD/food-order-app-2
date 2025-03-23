import React, { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import styles from './FoodItems.module.css';
import CartContext from "../Store/Cart-Context";



const FoodItems = (props) => {

    const ctx = useContext(CartContext);

    const [amount, setAmount] = useState(1)
    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value))
    }

    const handleClick = () => {
        const item = {
            title: props.title,
            price: props.price,
            amount: amount,
        };
        ctx.addItem(item);
    }



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
                    ${props.price.toFixed(2)}
                </div>
            </div>
            <div className={styles.secondhalf}>
                <div className={styles.amount}>
                    <div> Amount </div>
                    <input type="number" value={amount} min={1} onChange={handleAmountChange}/>
                </div>
                <div>
                    <Button className={styles.button} onClick = {handleClick}> Add </Button>
                </div>
            </div>
        </div>
    )
}


export default FoodItems;