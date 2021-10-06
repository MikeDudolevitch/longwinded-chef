import { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
    render() {
        console.log(this.props)
        const { name, id } = this.props.recipe
        return(
            <li id="recipe">
                <Link to={`/recipes/${id}`}>
                    {name}
                </Link>
            </li>
        )
    }
}

