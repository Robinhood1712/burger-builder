import React from "react";

import Auxilliary from "../../../hoc/auxi";


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return (
                <li>
                    {igkey} : {props.ingredients[igkey]}
                </li> );
    });


    return (
        <Auxilliary>
            <h3>Your Order</h3>
             <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout ?</p>

        </Auxilliary>

    )
}


export default orderSummary;