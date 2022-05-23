import React from "react";

import Logo from "../../../components/Logo/Logo";
import NavigationItems from "..//NavigationItems/NavigationItems";

import styles from "../SideDrawer/SideDrawer.css";
import Backdrop from "../../UI/Modal/Backdrop/Backdrop";
import Auxilliary from "../../../hoc/auxi";


const sideDrawer = (props) => {
    return (
        <Auxilliary>
            <Backdrop  show = {props.open} clicked = {props.closed}/>
            <div className={styles.SideDrawer}>
                <Logo height='10%'/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilliary>
    )
}


export default sideDrawer;