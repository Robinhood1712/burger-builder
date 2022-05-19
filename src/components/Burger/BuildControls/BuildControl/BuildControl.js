import React from "react";

import styles from '../BuildControl/BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}> {props.label} </div>
            <button className={styles.More}
                 onClick = {props.added}
                 disable = {props.disabled}> More </button>
            <button className={styles.Less}
                 onClick = {props.removed}> Less </button>
        </div>
    )
}

export default buildControl;