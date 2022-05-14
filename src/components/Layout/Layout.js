import React from "react";
import Auxilliary from "../../hoc/auxi";
import styles from '../Layout/Layout.css'

const layout = (props) => {
    return (

        <Auxilliary>

            <div>toolbar, sideDrawer, backDrop </div>
            <main className = {styles.content}>
                {props.children}
            </main>

        </Auxilliary>

    )
}

export default layout;