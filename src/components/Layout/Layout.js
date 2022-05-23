import React, { Component } from "react";
import Auxilliary from "../../hoc/auxi";
import styles from '../Layout/Layout.css'

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state = {
        showSideDrawer: true
    }


    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    } 


    render () {
        return (
            <Auxilliary>
                <Toolbar />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />         
                <main className = {styles.content}>
                    {this.props.children}
                </main>
            </Auxilliary>
        )
    }

}

export default Layout;