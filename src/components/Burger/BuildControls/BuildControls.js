import React from "react";

import styles from "../BuildControls/BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
]


const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl key= {ctrl.label} label= {ctrl.label} />
            })}
        </div>
    )
}


export default buildControls;