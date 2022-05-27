import React, { Component } from "react";
import Auxilliary from "../auxi";
import Modal from "../../components/UI/Modal/Modal";
import axios from "../../Axios-orders";


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        state = {
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
            })
            axios.interceptors.response.use(null, error=> {
                this.setState({error: error})
            })
        }


        render (){
            return (
                <Auxilliary>
                    <Modal show = {this.state.error}>
                        <p>{this.state.error.message}</p>
                    </Modal>
                    <WrappedComponent  {...this.props} />                
                </Auxilliary>
            ) 
        }
    }
}


export default withErrorHandler;