import React from "react";
import Auxilliary from "../../hoc/auxi";
import styles from '../Layout/Layout.css'

import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => {
    return (

        <Auxilliary>

            {/* <div>toolbar, sideDrawer, backDrop </div> */}
            <Toolbar />
            <main className = {styles.content}>
                {props.children}
            </main>

        </Auxilliary>

    )
}

export default layout;