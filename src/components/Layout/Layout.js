import React, { Component } from "react";
import Auxilliary from "../../hoc/auxi";
import styles from '../Layout/Layout.css'

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component{
    state = {
        showSideDrawer: false
    }


    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    } 

    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer: true
        })
    }


    render () {
        return (
            <Auxilliary>
                <Toolbar clicked = {this.sideDrawerOpenHandler}/>
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />         
                <main className = {styles.content}>
                    {this.props.children}
                </main>
            </Auxilliary>
        )
    }

}

export default Layout;