import { Component } from "react";

export default class Ingredient extends Component {
    render() {
        const { name, amount } = this.props.ingredient
        return(
            <li className="content-p">
                {amount} {name}
            </li>
        )
    }
}
