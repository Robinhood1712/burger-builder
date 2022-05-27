import React from "react";
import Auxilliary from "../auxi";
import Modal from "../../components/UI/Modal/Modal";


const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Auxilliary>
                <Modal show>
                    <p>someting went wrong!</p>
                </Modal>
                <WrappedComponent  {...props} />                
            </Auxilliary>
        ) 
    }

}


export default withErrorHandler;