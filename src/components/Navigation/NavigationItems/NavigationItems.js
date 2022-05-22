import React from "react";

import styles from "../NavigationItems/NavigationItems";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";


const navigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link = '/' active = {true}> Burger Builder</NavigationItem>
            <NavigationItem link = '/'> Checkout</NavigationItem>

        </ul>
    )
}


export default navigationItems;