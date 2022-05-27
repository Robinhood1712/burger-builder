import React, { Component } from "react";

import Auxilliary from "../../hoc/auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../Axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENTS_PRICES = {
    salad: 200,
    cheese: 400,
    bacon: 500,
    meat: 700
}


class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice : 1100,
        purchasable: false,
        purchasing: false,
        loading: false
    } 

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }

        const sum = Object.keys(ingredients).map (igkey => {
            return ingredients[igkey]
        }).reduce( (add, el) => {
            return add + el
        }, 0)

        this.setState({purchasable: sum > 0 })
    } 



    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;

        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]

        if (oldCount <= 0){
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceReduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceReduction - oldPrice;

        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        })

        this.updatePurchaseState(updatedIngredients);
    }

    purchaseCanceledHandler = () => {
        this.setState({
            purchasing : false
        })
    }

    purchaseContinuedHandler = () => {
        this.setState({
            loading: true
        })

        const orders = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customerData: {
                name: 'adewole',
                address: {
                    street: 'lagos',
                    zipCode: '23415',
                    country: 'nigeria',
                },
                email: 'ademolaadewole@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        // alert('You Continued');
        axios.post('/orders.json', orders).then(response => {
            this.setState({
                loading: false,
                purchasing: false})
        }).then(error => {
            console.log(error)
            this.setState({
                loading: false,
                purchasing: false
            })
        });
    }



    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
            ingredients = {this.state.ingredients}
            purchaseCancelled = {this.purchaseCanceledHandler}
            purchaseContinued = {this.purchaseContinuedHandler}
            price = {this.state.totalPrice} />

        if (this.state.loading){
            orderSummary = <Spinner />
        }


        return (
            <Auxilliary>
                <Modal show = {this.state.purchasing} closed = {this.purchaseCanceledHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    clicked = {this.purchaseHandler}
                     />
            </Auxilliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder);