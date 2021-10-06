import { Component } from "react";

export default class Ingredient extends Component {
    render() {
        const { name, amount, id, recipe_id } = this.props.ingredient
        return(
            <li>
                {amount} {name} 
            </li>
        )
    }
}
