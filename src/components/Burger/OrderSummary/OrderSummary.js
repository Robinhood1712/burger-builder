import React from "react";

import Auxilliary from "../../../hoc/auxi";

import Button from "../../UI/Button/Button";


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
            <h2><strong>Total Price: {props.price}</strong></h2>
            <Button clicked = {props.purchaseCancelled} btnType = 'Danger'>
                Cancel ?
            </Button>
            <Button clicked = {props.purchaseContinued} btnType = 'Sucess'>
                Continue ?
            </Button>



        </Auxilliary>

    )
}


export default orderSummary;