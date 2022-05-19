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

        <div>totalPrice : {props.price}</div>
        <div className={styles.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl 
                    key= {ctrl.label} 
                    label= {ctrl.label}
                    added = {() => props.ingredientAdded(ctrl.type)}
                    removed = {() => props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]} />
            })}
        </div>

        </Auxilliary>        

    )
}


export default buildControls;