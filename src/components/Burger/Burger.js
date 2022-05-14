import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    return (
        <div>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bread-bottom" />

        </div>

    );
}

export default burger;