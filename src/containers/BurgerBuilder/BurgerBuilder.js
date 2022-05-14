import React, { Component } from "react";
import Auxilliary from "../../hoc/auxi";


class BurgerBuilder extends Component{

    render() {
        return (
            <Auxilliary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxilliary>
        );
    }
}

export default BurgerBuilder;