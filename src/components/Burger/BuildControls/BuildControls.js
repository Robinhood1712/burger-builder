import React from "react";

import styles from "../BuildControls/BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";
import Auxilliary from "../../../hoc/auxi";

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
]


const buildControls = (props) => {
    return (

        <Auxilliary>

        <div className={styles.BuildControls}>
            <p> current price: <strong> {props.price} </strong> </p>
            {controls.map(ctrl => {
                return <BuildControl 
                    key= {ctrl.label} 
                    label= {ctrl.label}
                    added = {() => props.ingredientAdded(ctrl.type)}
                    removed = {() => props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]} />
            })}
            <button className={styles.OrderButton} 
                    disabled = {!props.purchasable}>ORDER NOW!</button>
        </div>

        </Auxilliary>        

    )
}


export default buildControls;