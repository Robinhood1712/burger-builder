import React from "react";

import Logo from "../../../components/Logo/Logo";
import NavigationItems from "..//NavigationItems/NavigationItems";

import styles from "../SideDrawer/SideDrawer.css";


const sideDrawer = () => {
    return (
        <div className={styles.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}


export default sideDrawer;