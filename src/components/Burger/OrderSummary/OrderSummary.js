import React, {Component} from "react";

import Auxilliary from "../../../hoc/auxi";

import Button from "../../UI/Button/Button";


class OrderSummary extends Component{

    componentDidUpdate() {
        console.log('[orderSummary] update');
    }

    render(){

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    {igkey} : {this.props.ingredients[igkey]}
                </li> )
        });
    

        return (
            <Auxilliary>
            <h3>Your Order</h3>
             <p>A delicious burger with the following ingredients :</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout ?</p>
            <h3><strong>Total Price: {this.props.price}</strong></h3>
            <Button clicked = {this.props.purchaseCancelled} btnType = 'Danger'>
                Cancel 
            </Button>
            <Button clicked = {this.props.purchaseContinued} btnType = 'Success'>
                Continue ?
            </Button>

        </Auxilliary>

        )
    }

}


export default OrderSummary;