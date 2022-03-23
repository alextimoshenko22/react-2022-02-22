import styles from "./style.module.css";
import { Button } from '../button/component';
import { joinIngredients } from './utils';
import { useEffect } from "react";

export const Product = ({ product, amount, decrement, increment }) => {
    useEffect(() => {
        const ingr = [1, '2', 3, 'privet', ''];
        const res = joinIngredients(ingr);
        //console.log(res);
    }, []);

    return <div className={styles.product}>
        <div className={styles.content}>
            <div>
                <h4 className={styles.title}>{product.name}</h4>
                <p className={styles.description}>{joinIngredients(product.ingredients)}</p>
                <div className={styles.price}>{product.price} $</div>
            </div>
            <div>
                <div className={styles.counter}>
                    <div className={styles.count}>{amount}</div>
                    <div className={styles.buttons}>
                        <Button onClick={decrement} icon="minus" />
                        <Button onClick={increment} icon="plus" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}