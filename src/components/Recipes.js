import React from "react"
import { Component } from "react";
import { connect, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import Recipe from "./Recipe";


class Recipes extends Component {
    render() {
        console.log(this.props)
        const recipesOnDom = this.props.recipe.map(r => <Recipe recipe={r} />)
        return (
            <div>
                {recipesOnDom}
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