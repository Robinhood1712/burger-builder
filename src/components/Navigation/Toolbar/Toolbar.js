import React from "react";

import styles from "../Toolbar/Toolbar.css";

import Logo from "../../Logo/Logo";

import NavigationItems from "../NavigationItems/NavigationItems";


const toolbar = () => {
    return (

        <header className={styles.Toolbar}>
            <div>menu</div>
            <Logo  height = '80%'/>
            <NavigationItems />
        </header>    
          
    )
}


export default toolbar;