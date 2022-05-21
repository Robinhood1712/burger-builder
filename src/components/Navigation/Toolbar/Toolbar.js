import React from "react";

import styles from "../Toolbar/Toolbar.css";

import Logo from "../../Logo/Logo";


const toolbar = () => {
    return (
        
        <header className={styles.Toolbar}>
            <div>menu</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
        
    )
}


export default toolbar;