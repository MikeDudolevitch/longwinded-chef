import { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
    render() {
        const { name, id } = this.props.recipe
        return(
            <li key={id} id="recipe">
                <Link to={`/recipes/${id}`}>
                    {name}
                </Link>
            </li>
        )
    }
}