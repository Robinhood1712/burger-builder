import React, { Component } from "react";

import Auxilliary from "../../hoc/auxi";
import Burger from "../../components/Burger/Burger";


class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad: 1,
            bacon: 1,
            meat: 2,
            cheese: 3
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