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
                });
                return req
            })
            axios.interceptors.response.use(res => res, error=> {
                this.setState({error: error})
            })
        }

        errorConfirmHandler = () => {
            this.setState({
                error: null
            })
        }


        render (){
            return (
                <Auxilliary>
                    <Modal show = {this.state.error} closed = {this.errorConfirmHandler}>
                        <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent  {...this.props} />                
                </Auxilliary>
            ) 
        }
    }
}


export default withErrorHandler;