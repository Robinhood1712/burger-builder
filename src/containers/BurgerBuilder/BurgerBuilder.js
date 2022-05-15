import React, { Component } from "react";

import Auxilliary from "../../hoc/auxi";
import Burger from "../../components/Burger/Burger";


class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        }
    }

    render() {
        return (
            <Auxilliary>
                <Burger ingredients = {this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;