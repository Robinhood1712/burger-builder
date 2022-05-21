import React from "react";

import styles from '../Modal/Modal.css';
import Auxilliary from "../../../hoc/auxi";
import Backdrop from "./Backdrop/Backdrop";



const modal = (props) => {
    return (
        <Auxilliary>
            <Backdrop show = {props.show} clicked = {props.closed}/>
            <div className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Auxilliary>
    )
    
}



export default modal;