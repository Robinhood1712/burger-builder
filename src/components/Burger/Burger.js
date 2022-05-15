import React from "react";

import styles from "../Burger/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + i} type = {igkey} />
        })
    })
    .reduce( (arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> please add ingredients </p>
    }


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>

    );
}

export default burger;