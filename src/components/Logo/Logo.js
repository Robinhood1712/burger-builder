import React from "react";

import BurgerLogo from "../../Assets/burger-logo.png.png";

import styles from "../Logo/Logo.css";



const logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt = 'burger-logo'/>
        </div>
    )
}

export default logo;