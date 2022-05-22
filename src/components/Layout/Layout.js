import React from "react";
import Auxilliary from "../../hoc/auxi";
import styles from '../Layout/Layout.css'

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
    return (

        <Auxilliary>

            <Toolbar />
            <SideDrawer />         
            <main className = {styles.content}>
                {props.children}
            </main>

        </Auxilliary>

    )
}

export default layout;