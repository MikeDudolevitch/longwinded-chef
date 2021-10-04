import React from "react"
import { Component } from "react";
import { useSelector} from "react-redux"
import { Link } from "react-router-dom"

function Recipes() {
    const { recipes } = useSelector((state) => state.recipe)

    const recipesOnDom = recipes.map(r => r.map(w =><Link to={`recipes/${w.id}`}><li>{w.name}</li></Link>
    ))
    const recipesList = <ul> {recipesOnDom} </ul>
    return (
        <div>
            {recipesList}
        </div>
    )
}

export default Recipes