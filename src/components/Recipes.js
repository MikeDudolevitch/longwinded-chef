import React from "react"
import { Component } from "react";
import { connect, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import Recipe from "./Recipe";


class Recipes extends Component {
    render() {
        const recipesOnDom = this.props.recipe.map(r => <Recipe recipe={r} />)
        return (
            <div className="content-div">
                <ul id="recipe-list">
                    {recipesOnDom}
                </ul>
            </div>
    )
}
}
    const mapStateToProps = state => {
        return {
            recipe: state.recipe
        }
    }

export default connect(mapStateToProps)(Recipes)