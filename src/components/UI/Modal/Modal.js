import React, {Component} from "react";

import styles from '../Modal/Modal.css';
import Auxilliary from "../../../hoc/auxi";
import Backdrop from "./Backdrop/Backdrop";



class Modal extends Component {

    shouldComponentUpdate(nextprops, nextState){

        return nextprops.show !== this.props.show || nextprops.children !== this.props.children;
    }

    componentDidUpdate (){
        console.log ('[modal.js] update')
    }

    render(){

        return (
            <Auxilliary>
            <Backdrop show = {this.props.show} clicked = {this.props.closed}/>
            <div className={styles.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
            </div>
        </Auxilliary>

        )
    }

    
} 



export default Modal;